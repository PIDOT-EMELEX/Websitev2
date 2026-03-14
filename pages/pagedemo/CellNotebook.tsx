"use client";

import React, { useLayoutEffect, useRef, useState } from "react";

type CellType = "text" | "heading" | "code";

type Cell = {
  id: string;
  value: string;
  type: CellType;
};

const COMMANDS: { label: string; type: CellType }[] = [
  { label: "Text", type: "text" },
  { label: "Heading", type: "heading" },
  { label: "Code", type: "code" },
];

export default function CellNotebook() {
  const [cells, setCells] = useState<Cell[]>([
    { id: crypto.randomUUID(), value: "", type: "text" },
  ]);

  const [selectedAll, setSelectedAll] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Command palette state
  const [paletteIndex, setPaletteIndex] = useState<number>(0);
  const [showPaletteFor, setShowPaletteFor] = useState<string | null>(null);

  const refs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const dragIndex = useRef<number | null>(null);
  const pendingFocus = useRef<string | null>(null);

  /* ---------- Focus handling ---------- */
  useLayoutEffect(() => {
    if (pendingFocus.current) {
      refs.current[pendingFocus.current]?.focus();
      pendingFocus.current = null;
    }
  }, [cells]);

  /* ---------- Cell operations ---------- */
  const addCell = (index: number) => {
    const newCell: Cell = {
      id: crypto.randomUUID(),
      value: "",
      type: "text",
    };
    const updated = [...cells];
    updated.splice(index + 1, 0, newCell);
    pendingFocus.current = newCell.id;
    setCells(updated);
  };

  const deleteCell = (index: number) => {
    if (cells.length === 1) return;
    const updated = cells.filter((_, i) => i !== index);
    pendingFocus.current = updated[Math.max(index - 1, 0)].id;
    setCells(updated);
  };

  const clearAllCells = () => {
    const newCell: Cell = {
      id: crypto.randomUUID(),
      value: "",
      type: "text",
    };
    pendingFocus.current = newCell.id;
    setCells([newCell]);
    setSelectedAll(false);
  };

  /* ---------- Command palette ---------- */
  const applyCommand = (index: number, type: CellType) => {
    const updated = [...cells];
    updated[index] = {
      ...updated[index],
      type,
      value: updated[index].value.replace("/", ""),
    };
    setCells(updated);
    setShowPaletteFor(null);
    pendingFocus.current = updated[index].id;
  };

  /* ---------- Keyboard ---------- */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const cell = cells[index];

    // Palette navigation
    if (showPaletteFor === cell.id) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setPaletteIndex((i) => (i + 1) % COMMANDS.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setPaletteIndex((i) =>
          i === 0 ? COMMANDS.length - 1 : i - 1
        );
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        applyCommand(index, COMMANDS[paletteIndex].type);
        return;
      }
      if (e.key === "Escape") {
        setShowPaletteFor(null);
        return;
      }
    }

    // Ctrl + A → select all
    if (e.ctrlKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      setSelectedAll(true);
      return;
    }

    // Delete after Ctrl + A
    if (
      selectedAll &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      e.preventDefault();
      clearAllCells();
      return;
    }

    // Enter → new cell
    if (e.key === "Enter") {
      e.preventDefault();
      setSelectedAll(false);
      addCell(index);
      return;
    }

    // Backspace on empty
    if (
      e.key === "Backspace" &&
      cell.value === "" &&
      cells.length > 1
    ) {
      e.preventDefault();
      deleteCell(index);
      return;
    }

    setSelectedAll(false);
  };

  /* ---------- Auto grow ---------- */
  const autoGrow = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  /* ---------- Drag ---------- */
  const onDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const onDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    if (dragIndex.current === null || dragIndex.current === index) return;
    setDragOverIndex(index);
  };

  const onDrop = (index: number) => {
    if (dragIndex.current === null) return;
    const updated = [...cells];
    const [moved] = updated.splice(dragIndex.current, 1);
    updated.splice(index, 0, moved);
    dragIndex.current = null;
    setDragOverIndex(null);
    setCells(updated);
  };

  const onDragEnd = () => {
    dragIndex.current = null;
    setDragOverIndex(null);
  };

  /* ---------- Render ---------- */
  return (
    <div className="max-w-4xl mx-auto py-5">
      {cells.map((cell, index) => (
        <div key={cell.id} className="relative">
          {dragOverIndex === index && (
            <div className="absolute -top-1 left-6 right-0 h-[2px] bg-blue-500" />
          )}

          <div
            className={`flex gap-3 mb-1 ${
              selectedAll ? "bg-blue-50" : ""
            }`}
            onDragOver={(e) => onDragOver(e, index)}
            onDrop={() => onDrop(index)}
          >
            {/* Drag handle */}
            <div
              draggable
              onDragStart={() => onDragStart(index)}
              onDragEnd={onDragEnd}
              className="cursor-grab select-none text-gray-400 px-1"
            >
              ⋮⋮
            </div>

            {/* Cell */}
            <textarea
              ref={(el) => {
                refs.current[cell.id] = el;
                if (el) autoGrow(el);
              }}
              value={cell.value}
              placeholder="Press '/' for commands"
              rows={1}
              onChange={(e) => {
                const updated = [...cells];
                updated[index].value = e.target.value;
                setCells(updated);
                autoGrow(e.target);

                if (e.target.value === "/") {
                  setShowPaletteFor(cell.id);
                  setPaletteIndex(0);
                } else {
                  setShowPaletteFor(null);
                }
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-full resize-none bg-transparent outline-none ${
                cell.type === "heading"
                  ? "text-2xl font-semibold"
                  : cell.type === "code"
                  ? "font-mono text-sm bg-gray-100 rounded px-2 py-1"
                  : "text-base"
              }`}
            />

            {/* Command Palette */}
            {showPaletteFor === cell.id && (
              <div className="absolute left-8 top-full mt-2 w-30 max-h-80 overflow-y-auto rounded-2xl bg-black text-white/70 shadow-2xl border border-neutral-800 z-20">
                {COMMANDS.map((cmd, i) => (
                  <div
                    key={cmd.type}
                    className={`px-3 py-2 text-sm cursor-pointer ${
                      i === paletteIndex
                        ? "bg-white/10 rounded-2xl"
                        : "hover:bg-white/10 hover:rounded-2xl"
                        
                    }`}
                    onMouseDown={() => applyCommand(index, cmd.type)}
                  >
                    {cmd.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
