"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  ImageIcon,
  Quote,
  Code,
  List,
  ListOrdered,
  Minus,
  Type,
  Heading1,
  Heading2,
  Info,
  GripVertical,
  Check,
  Eye,
  EyeOff,
  Save,
  Clock,
  AlertTriangle,
  Lightbulb,
  PartyPopper,
  Bold,
  Italic,
  Link as LinkIcon,
  Underline,
  Strikethrough,
  Folder,
} from "lucide-react";
import { getBlogs, updateBlog } from "@/lib/blog-storage";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type BlockType =
  | "paragraph"
  | "heading"
  | "subheading"
  | "blockquote"
  | "code"
  | "points"
  | "numbered-list"
  | "image"
  | "divider"
  | "callout";

interface Block {
  id: string;
  type: BlockType;
  text?: string;
  items?: string[];
  src?: string;
  caption?: string;
  attribution?: string;
  language?: string;
  calloutType?: "info" | "warning" | "tip" | "success";
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function newBlock(type: BlockType): Block {
  const id = uid();
  if (type === "points" || type === "numbered-list") return { id, type, items: [""] };
  if (type === "divider") return { id, type };
  if (type === "callout") return { id, type, text: "", calloutType: "info" };
  if (type === "image") return { id, type, src: "", caption: "" };
  if (type === "blockquote") return { id, type, text: "", attribution: "" };
  return { id, type, text: "" };
}

/* ─────────────────────────────────────────────
   Auto-grow textarea hook
───────────────────────────────────────────── */
function useGrow(value: string) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, [value]);
  return ref;
}

/* ─────────────────────────────────────────────
   Block type palette
───────────────────────────────────────────── */
const PALETTE: { type: BlockType; label: string; Icon: any; desc: string }[] = [
  { type: "paragraph",     label: "Text",          Icon: Type,         desc: "Plain paragraph" },
  { type: "heading",       label: "Heading 1",     Icon: Heading1,     desc: "Large heading" },
  { type: "subheading",    label: "Heading 2",     Icon: Heading2,     desc: "Section heading" },
  { type: "blockquote",    label: "Quote",         Icon: Quote,        desc: "Pull quote" },
  { type: "code",          label: "Code",          Icon: Code,         desc: "Code block" },
  { type: "points",        label: "Bullet List",   Icon: List,         desc: "Unordered list" },
  { type: "numbered-list", label: "Numbered List", Icon: ListOrdered,  desc: "Ordered list" },
  { type: "image",         label: "Image",         Icon: ImageIcon,    desc: "Image & caption" },
  { type: "divider",       label: "Divider",       Icon: Minus,        desc: "Horizontal rule" },
  { type: "callout",       label: "Callout",       Icon: Info,         desc: "Tip or warning" },
];

/* ─────────────────────────────────────────────
   Block Picker dropdown
───────────────────────────────────────────── */
function BlockPicker({ onSelect, onClose }: { onSelect: (t: BlockType) => void; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute left-12 top-0 z-50 bg-zinc-900 border border-zinc-700/60 rounded-2xl shadow-2xl p-3 w-64 animate-in fade-in-0 zoom-in-95 duration-150">
        <p className="text-[10px] uppercase tracking-widest text-zinc-500 px-2 pb-2">Insert block</p>
        <div className="grid grid-cols-2 gap-1.5">
          {PALETTE.map(({ type, label, Icon, desc }) => (
            <button
              key={type}
              onClick={() => { onSelect(type); onClose(); }}
              className="flex flex-col items-start gap-1.5 p-2.5 rounded-xl hover:bg-zinc-800 transition-colors text-left"
            >
              <span className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Icon size={14} className="text-[#f69507]" />
              </span>
              <span className="text-xs font-medium text-zinc-200 leading-none">{label}</span>
              <span className="text-[10px] text-zinc-600 leading-none">{desc}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Block content renderer
───────────────────────────────────────────── */
function BlockContent({ block, onUpdate, onFocus }: { block: Block; onUpdate: (u: Partial<Block>) => void; onFocus: () => void }) {
  const textRef = useGrow(block.text || "");
  const paragraphRef = useRef<HTMLTextAreaElement>(null);

  switch (block.type) {

    case "heading":
      return (
        <input value={block.text || ""} onChange={e => onUpdate({ text: e.target.value })} onFocus={onFocus}
          placeholder="Heading" className="w-full bg-transparent text-3xl font-bold text-white outline-none placeholder:text-zinc-700 py-1.5" />
      );

    case "subheading":
      return (
        <input value={block.text || ""} onChange={e => onUpdate({ text: e.target.value })} onFocus={onFocus}
          placeholder="Subheading" className="w-full bg-transparent text-2xl font-semibold text-zinc-200 outline-none placeholder:text-zinc-700 py-1.5" />
      );

    case "paragraph": {
      const applyFormat = (format: "bold" | "italic" | "code" | "link" | "underline" | "strikethrough") => {
        const el = paragraphRef.current;
        if (!el) return;

        const value = block.text || "";
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const selected = value.slice(start, end) || (format === "link" ? "link text" : "text");
        let replacement = selected;

        if (format === "bold") replacement = `**${selected}**`;
        if (format === "italic") replacement = `*${selected}*`;
        if (format === "code") replacement = `\`${selected}\``;
        if (format === "underline") replacement = `__${selected}__`;
        if (format === "strikethrough") replacement = `~~${selected}~~`;
        if (format === "link") {
          const url = window.prompt("Link URL", "https://");
          if (!url) return;
          replacement = `[${selected}](${url})`;
        }

        const next = value.slice(0, start) + replacement + value.slice(end);
        onUpdate({ text: next });
        setTimeout(() => {
          const cursor = start + replacement.length;
          el.focus();
          el.selectionStart = el.selectionEnd = cursor;
        }, 0);
      };

      return (
        <>
          <div className="mb-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyFormat("bold")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <Bold size={14} /> Bold
            </button>
            <button
              type="button"
              onClick={() => applyFormat("italic")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <Italic size={14} /> Italic
            </button>
            <button
              type="button"
              onClick={() => applyFormat("underline")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <Underline size={14} /> Underline
            </button>
            <button
              type="button"
              onClick={() => applyFormat("strikethrough")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <Strikethrough size={14} /> Strike
            </button>
            <button
              type="button"
              onClick={() => applyFormat("code")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <Code size={14} /> Code
            </button>
            <button
              type="button"
              onClick={() => applyFormat("link")}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <LinkIcon size={14} /> Link
            </button>
          </div>
          <textarea
            ref={(element) => {
              textRef.current = element;
              paragraphRef.current = element;
            }}
            value={block.text || ""}
            onChange={(e) => onUpdate({ text: e.target.value })}
            onFocus={onFocus}
            placeholder="Tell your story…"
            rows={1}
            className="w-full bg-transparent text-[17px] text-zinc-300 leading-8 resize-none outline-none placeholder:text-zinc-700 py-1.5 overflow-hidden"
          />
        </>
      );
    }

    case "blockquote":
      return (
        <div className="border-l-[3px] border-[#f69507] pl-5 py-1">
          <textarea ref={textRef} value={block.text || ""} onChange={e => onUpdate({ text: e.target.value })} onFocus={onFocus}
            placeholder="Quote…" rows={2}
            className="w-full bg-transparent text-xl italic text-zinc-300 leading-relaxed resize-none outline-none placeholder:text-zinc-600 overflow-hidden" />
          <input value={block.attribution || ""} onChange={e => onUpdate({ attribution: e.target.value })}
            placeholder="— Attribution (optional)"
            className="w-full bg-transparent text-sm text-zinc-500 outline-none mt-1.5 placeholder:text-zinc-700" />
        </div>
      );

    case "code":
      return (
        <div className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/60 bg-zinc-900/40">
            <input value={block.language || ""} onChange={e => onUpdate({ language: e.target.value })}
              placeholder="language" className="bg-transparent text-xs text-zinc-500 outline-none w-28 placeholder:text-zinc-700" />
            <div className="flex gap-1.5">
              {["bg-red-500","bg-yellow-500","bg-green-500"].map(c => (
                <div key={c} className={`w-2.5 h-2.5 rounded-full opacity-50 ${c}`} />
              ))}
            </div>
          </div>
          <textarea value={block.text || ""} onChange={e => onUpdate({ text: e.target.value })} onFocus={onFocus}
            placeholder="// paste your code here…" rows={6}
            className="w-full bg-transparent p-4 font-mono text-sm text-emerald-400 resize-none outline-none leading-7 placeholder:text-zinc-700" />
        </div>
      );

    case "points":
      return (
        <div className="py-1 space-y-2">
          {(block.items || [""]).map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f69507] shrink-0" />
              <input value={item}
                onChange={e => { const n = [...(block.items || [])]; n[i] = e.target.value; onUpdate({ items: n }); }}
                onKeyDown={e => {
                  if (e.key === "Enter") { e.preventDefault(); const n = [...(block.items || [])]; n.splice(i + 1, 0, ""); onUpdate({ items: n }); }
                  if (e.key === "Backspace" && item === "" && (block.items || []).length > 1) {
                    const n = [...(block.items || [])]; n.splice(i, 1); onUpdate({ items: n });
                  }
                }}
                onFocus={onFocus} placeholder="List item…"
                className="flex-1 bg-transparent text-[17px] text-zinc-300 outline-none placeholder:text-zinc-700" />
            </div>
          ))}
          <button onClick={() => onUpdate({ items: [...(block.items || []), ""] })}
            className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 ml-4 transition-colors mt-1">
            <Plus size={10} /> Add item
          </button>
        </div>
      );

    case "numbered-list":
      return (
        <div className="py-1 space-y-2">
          {(block.items || [""]).map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[#f69507] text-sm font-semibold shrink-0 w-5 text-right">{i + 1}.</span>
              <input value={item}
                onChange={e => { const n = [...(block.items || [])]; n[i] = e.target.value; onUpdate({ items: n }); }}
                onKeyDown={e => {
                  if (e.key === "Enter") { e.preventDefault(); const n = [...(block.items || [])]; n.splice(i + 1, 0, ""); onUpdate({ items: n }); }
                  if (e.key === "Backspace" && item === "" && (block.items || []).length > 1) {
                    const n = [...(block.items || [])]; n.splice(i, 1); onUpdate({ items: n });
                  }
                }}
                onFocus={onFocus} placeholder="List item…"
                className="flex-1 bg-transparent text-[17px] text-zinc-300 outline-none placeholder:text-zinc-700" />
            </div>
          ))}
          <button onClick={() => onUpdate({ items: [...(block.items || []), ""] })}
            className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 ml-8 transition-colors mt-1">
            <Plus size={10} /> Add item
          </button>
        </div>
      );

    case "image":
      return (
        <div className="py-1">
          {block.src ? (
            <div className="rounded-2xl overflow-hidden group relative">
              <img src={block.src} alt="block" className="w-full object-cover max-h-[480px]" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <label className="cursor-pointer px-5 py-2 bg-white/20 backdrop-blur rounded-full text-sm hover:bg-white/30 transition-colors">
                  Change
                  <input type="file" accept="image/*" className="hidden"
                    onChange={e => { const f = e.target.files?.[0]; if (f) onUpdate({ src: URL.createObjectURL(f) }); }} />
                </label>
              </div>
            </div>
          ) : (
            <label className="cursor-pointer flex flex-col items-center justify-center h-44 rounded-2xl border-2 border-dashed border-zinc-800 hover:border-zinc-600 transition-colors group">
              <ImageIcon size={28} className="text-zinc-700 group-hover:text-zinc-500 transition-colors mb-2" />
              <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">Click to upload image</span>
              <input type="file" accept="image/*" className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) onUpdate({ src: URL.createObjectURL(f) }); }} />
            </label>
          )}
          {block.src && (
            <input value={block.caption || ""} onChange={e => onUpdate({ caption: e.target.value })}
              placeholder="Add a caption…"
              className="w-full bg-transparent text-sm text-zinc-500 outline-none mt-3 text-center placeholder:text-zinc-700" />
          )}
        </div>
      );

    case "divider":
      return (
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 border-t border-zinc-800" />
          <span className="text-zinc-700 tracking-[8px] text-xs">· · ·</span>
          <div className="flex-1 border-t border-zinc-800" />
        </div>
      );

    case "callout": {
      const META: Record<string, { label: string; Icon: any; ring: string; bg: string }> = {
        info:    { label: "💡 Note",    Icon: Lightbulb,      ring: "border-blue-700/50",   bg: "bg-blue-950/30" },
        warning: { label: "⚠️ Warning", Icon: AlertTriangle,   ring: "border-amber-700/50",  bg: "bg-amber-950/30" },
        tip:     { label: "✅ Tip",     Icon: Check,           ring: "border-green-700/50",  bg: "bg-green-950/30" },
        success: { label: "🎉 Success", Icon: PartyPopper,     ring: "border-emerald-700/50",bg: "bg-emerald-950/30" },
      };
      const ct = block.calloutType || "info";
      const m = META[ct];
      return (
        <div className={`rounded-xl border p-4 ${m.ring} ${m.bg}`}>
          <select value={ct} onChange={e => onUpdate({ calloutType: e.target.value as any })}
            className="bg-transparent text-xs font-semibold outline-none mb-2 text-zinc-300">
            {Object.entries(META).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <textarea ref={textRef} value={block.text || ""} onChange={e => onUpdate({ text: e.target.value })} onFocus={onFocus}
            placeholder="Write your note…" rows={2}
            className="w-full bg-transparent text-base text-zinc-300 leading-relaxed resize-none outline-none placeholder:text-zinc-600 overflow-hidden" />
        </div>
      );
    }

    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   Block row with side controls
───────────────────────────────────────────── */
function BlockRow({
  block, index, total, isActive,
  onFocus, onUpdate, onDelete, onMoveUp, onMoveDown, onChangeType,
  showPicker, onTogglePicker, onPickerSelect,
}: {
  block: Block; index: number; total: number; isActive: boolean;
  onFocus: () => void; onUpdate: (u: Partial<Block>) => void;
  onDelete: () => void; onMoveUp: () => void; onMoveDown: () => void;
  onChangeType: (t: BlockType) => void;
  showPicker: boolean; onTogglePicker: () => void; onPickerSelect: (t: BlockType) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [typeMenu, setTypeMenu] = useState(false);
  const visible = hovered || isActive;

  return (
    <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setTypeMenu(false); }}>
      <div className="flex gap-2 items-start">

        {/* ─── Left side controls ─── */}
        <div className={`flex flex-col gap-0.5 pt-[10px] shrink-0 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`} style={{ width: 52 }}>

          {/* Add block below */}
          <div className="relative">
            <button onClick={onTogglePicker} title="Insert block"
              className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-white hover:bg-zinc-800 transition-all">
              <Plus size={13} />
            </button>
            {showPicker && <BlockPicker onSelect={onPickerSelect} onClose={onTogglePicker} />}
          </div>

          {/* Change block type */}
          <div className="relative">
            <button onClick={() => setTypeMenu(v => !v)} title="Change block type"
              className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-white hover:bg-zinc-800 transition-all">
              <GripVertical size={13} />
            </button>
            {typeMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setTypeMenu(false)} />
                <div className="absolute left-8 top-0 z-50 bg-zinc-900 border border-zinc-700/60 rounded-xl shadow-2xl p-2 w-44">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 px-2 pb-1.5">Turn into</p>
                  {PALETTE.map(({ type, label, Icon }) => (
                    <button key={type} onClick={() => { onChangeType(type); setTypeMenu(false); }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm hover:bg-zinc-800 transition-colors text-left ${block.type === type ? "text-[#f69507]" : "text-zinc-300"}`}>
                      <Icon size={13} /> {label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ─── Block content ─── */}
        <div className="flex-1 min-w-0">
          <BlockContent block={block} onUpdate={onUpdate} onFocus={onFocus} />
        </div>

        {/* ─── Right side controls ─── */}
        <div className={`flex flex-col gap-0.5 pt-[10px] shrink-0 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`} style={{ width: 28 }}>
          <button onClick={onMoveUp} disabled={index === 0}
            className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronUp size={13} />
          </button>
          <button onClick={onMoveDown} disabled={index === total - 1}
            className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronDown size={13} />
          </button>
          <button onClick={onDelete}
            className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-red-400 hover:bg-zinc-800 transition-all">
            <Trash2 size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
export default function BlogEditorPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [title, setTitle]             = useState("");
  const [excerpt, setExcerpt]         = useState("");
  const [coverImage, setCoverImage]   = useState("");
  const [category, setCategory]       = useState("General");
  const [author, setAuthor]           = useState("");
  const [published, setPublished]     = useState(false);
  const [blocks, setBlocks]           = useState<Block[]>([newBlock("paragraph")]);
  const [activeId, setActiveId]       = useState<string | null>(null);
  const [picker, setPicker]           = useState<string | null>(null); // blockId to insert after
  const [isDirty, setIsDirty]         = useState(false);
  const [isSaving, setIsSaving]       = useState(false);
  const [savedAt, setSavedAt]         = useState<Date | null>(null);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const defaultCategories = [
    "General",
    "Placements",
    "Hackathons",
    "Workshops",
    "Industry Connect",
    "Case Studies",
    "Insights",
    "AI & Technology",
    "Success Stories",
  ];

  useEffect(() => {
    const blogsList = getBlogs();
    const uniqueCats = Array.from(
      new Set([...defaultCategories, ...blogsList.map((b) => b.category).filter(Boolean)])
    ).sort();
    setAllCategories(uniqueCats);
  }, [category]);

  const titleRef   = useGrow(title);
  const excerptRef = useGrow(excerpt);

  /* ── Load ── */
  useEffect(() => {
    const found = getBlogs().find(b => b.slug === slug);
    if (!found) return;
    setTitle(found.title || "");
    setExcerpt(found.excerpt || "");
    setCoverImage(found.image || "");
    setCategory(found.category || "General");
    setAuthor(found.author || "");
    setPublished(found.showOnBlogPage || false);
    const loaded = (found.content || []).map((b: any) => ({ ...b, id: b.id || uid() }));
    setBlocks(loaded.length ? loaded : [newBlock("paragraph")]);
  }, [slug]);

  /* ── Word count ── */
  const wordCount = (() => {
    const text = [title, excerpt, ...blocks.map(b => (b.text || "") + (b.items || []).join(" ") + (b.caption || ""))].join(" ");
    return text.trim().split(/\s+/).filter(Boolean).length;
  })();

  const readTime = Math.max(1, Math.round(wordCount / 200));

  const markDirty = () => setIsDirty(true);

  /* ── Save ── */
  const save = useCallback(async () => {
    setIsSaving(true);
    updateBlog(slug, {
      title, excerpt,
      image: coverImage,
      category, author,
      showOnBlogPage: published,
      readTime: `${readTime} Min Read`,
      content: blocks,
    });
    await new Promise(r => setTimeout(r, 350));
    setIsDirty(false);
    setIsSaving(false);
    setSavedAt(new Date());
  }, [slug, title, excerpt, coverImage, category, author, published, blocks, readTime]);

  /* ── Auto-save (30s after last change) ── */
  useEffect(() => {
    if (!isDirty) return;
    const t = setTimeout(save, 30_000);
    return () => clearTimeout(t);
  }, [isDirty, save]);

  /* ── Block helpers ── */
  const upd = (id: string, u: Partial<Block>) => { setBlocks(p => p.map(b => b.id === id ? { ...b, ...u } : b)); markDirty(); };
  const del = (id: string) => { setBlocks(p => p.length > 1 ? p.filter(b => b.id !== id) : p); markDirty(); };
  const moveUp = (id: string) => { setBlocks(p => { const i = p.findIndex(b => b.id === id); if (i === 0) return p; const n = [...p]; [n[i-1],n[i]] = [n[i],n[i-1]]; return n; }); markDirty(); };
  const moveDown = (id: string) => { setBlocks(p => { const i = p.findIndex(b => b.id === id); if (i === p.length-1) return p; const n = [...p]; [n[i],n[i+1]] = [n[i+1],n[i]]; return n; }); markDirty(); };
  const changeType = (id: string, type: BlockType) => { setBlocks(p => p.map(b => b.id === id ? { ...newBlock(type), id, text: b.text || "" } : b)); markDirty(); };
  const insertAfter = (afterId: string, type: BlockType) => {
    const nb = newBlock(type);
    setBlocks(p => { const i = p.findIndex(b => b.id === afterId); const n = [...p]; n.splice(i+1, 0, nb); return n; });
    setActiveId(nb.id);
    setPicker(null);
    markDirty();
  };
  const addAtEnd = () => { const nb = newBlock("paragraph"); setBlocks(p => [...p, nb]); setActiveId(nb.id); markDirty(); };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ══════════════ TOP BAR ══════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-8 h-14 border-b border-zinc-800/50 bg-[#0a0a0a]/95 backdrop-blur-xl">

        {/* Left */}
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/admin/blogs"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors shrink-0">
            <ArrowLeft size={16} />
            <span className="text-sm hidden sm:inline">Blogs</span>
          </Link>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className="text-zinc-500 text-sm truncate max-w-[140px] sm:max-w-xs hidden sm:block">
            {title || "Untitled"}
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Stats */}
          <span className="hidden md:block text-xs text-zinc-600">
            {wordCount} words · {readTime} min read
          </span>

          {/* Save status */}
          <span className="hidden sm:flex items-center gap-1 text-xs text-zinc-600">
            {isSaving ? (
              <><Clock size={11} className="animate-spin" /> Saving…</>
            ) : isDirty ? (
              <><Clock size={11} /> Unsaved</>
            ) : savedAt ? (
              <><Check size={11} className="text-green-500" /> Saved</>
            ) : null}
          </span>

          {/* Visibility toggle */}
          <button onClick={() => { setPublished(v => !v); markDirty(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              published ? "bg-green-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
            {published ? <Eye size={12} /> : <EyeOff size={12} />}
            <span className="hidden sm:inline">{published ? "Published" : "Draft"}</span>
          </button>

          {/* Save button */}
          <button onClick={save} disabled={isSaving}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f69507] text-black text-xs font-semibold hover:bg-[#e08a00] transition-colors disabled:opacity-60">
            <Save size={12} />
            Save
          </button>
        </div>
      </nav>

      {/* ══════════════ EDITOR BODY ══════════════ */}
      <main className="pt-14 pb-40">
        <div className="max-w-[720px] mx-auto px-4 sm:px-8 py-10">

          {/* ── Cover image ── */}
          <div className="mb-8">
            {coverImage ? (
              <div className="relative rounded-2xl overflow-hidden group h-64">
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="cursor-pointer px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors">
                    Change cover
                    <input type="file" accept="image/*" className="hidden"
                      onChange={e => { const f = e.target.files?.[0]; if (f) { setCoverImage(URL.createObjectURL(f)); markDirty(); } }} />
                  </label>
                  <button onClick={() => { setCoverImage(""); markDirty(); }}
                    className="px-4 py-2 bg-red-600/80 rounded-full text-sm hover:bg-red-600 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center h-36 rounded-2xl border-2 border-dashed border-zinc-800 hover:border-[#f69507]/40 transition-colors group">
                <ImageIcon size={26} className="text-zinc-700 group-hover:text-[#f69507]/60 transition-colors mb-2" />
                <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">Add a cover image</span>
                <input type="file" accept="image/*" className="hidden"
                  onChange={e => { const f = e.target.files?.[0]; if (f) { setCoverImage(URL.createObjectURL(f)); markDirty(); } }} />
              </label>
            )}
          </div>

          {/* ── Meta row ── */}
          <div className="flex flex-wrap gap-2 mb-6">
            {/* Custom Category Combobox */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-full px-4 py-1.5 text-sm text-zinc-300 outline-none transition-colors"
              >
                <Folder size={13} className="text-[#f69507]" />
                <span>{category || "Select Category"}</span>
                <ChevronDown size={14} className="text-zinc-500" />
              </button>

              {categoryOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => { setCategoryOpen(false); setCategorySearch(""); }} />
                  <div className="absolute left-0 top-full mt-2 z-50 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-3 w-64 animate-in fade-in-0 zoom-in-95 duration-150">
                    <input
                      type="text"
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                      placeholder="Search or create category..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#f69507] mb-2 placeholder:text-zinc-600"
                      autoFocus
                    />
                    <div className="max-h-48 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-zinc-800">
                      {allCategories
                        .filter((c) =>
                          c.toLowerCase().includes(categorySearch.toLowerCase())
                        )
                        .map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => {
                              setCategory(c);
                              setCategoryOpen(false);
                              setCategorySearch("");
                              markDirty();
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-left transition-colors ${
                              category === c
                                ? "bg-[#f69507]/10 text-[#f69507] font-medium"
                                : "text-zinc-300 hover:bg-zinc-900"
                            }`}
                          >
                            <span>{c}</span>
                            {category === c && <Check size={12} />}
                          </button>
                        ))}
                      
                      {categorySearch &&
                        !allCategories.some(
                          (c) => c.toLowerCase() === categorySearch.toLowerCase()
                        ) && (
                          <button
                            type="button"
                            onClick={() => {
                              const newCat = categorySearch.trim();
                              if (newCat) {
                                setCategory(newCat);
                                setAllCategories((prev) => Array.from(new Set([...prev, newCat])).sort());
                                setCategoryOpen(false);
                                setCategorySearch("");
                                markDirty();
                              }
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs text-left text-[#f69507] hover:bg-zinc-900 transition-colors font-medium border-t border-zinc-900 mt-2 pt-2"
                          >
                            <Plus size={12} />
                            <span>Create "{categorySearch}"</span>
                          </button>
                        )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <input value={author} onChange={e => { setAuthor(e.target.value); markDirty(); }}
              placeholder="Author name"
              className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-300 outline-none hover:border-zinc-600 transition-colors placeholder:text-zinc-600 w-40" />
          </div>

          {/* ── Title ── */}
          <textarea ref={titleRef} value={title} onChange={e => { setTitle(e.target.value); markDirty(); }}
            placeholder="Title" rows={1}
            className="w-full bg-transparent text-4xl sm:text-5xl font-bold text-white resize-none outline-none placeholder:text-zinc-700 leading-tight mb-4 overflow-hidden" />

          {/* ── Subtitle / Excerpt ── */}
          <textarea ref={excerptRef} value={excerpt} onChange={e => { setExcerpt(e.target.value); markDirty(); }}
            placeholder="Add a subtitle or brief description…" rows={1}
            className="w-full bg-transparent text-lg sm:text-xl text-zinc-400 resize-none outline-none placeholder:text-zinc-700 leading-relaxed mb-8 overflow-hidden" />

          {/* ── Divider ── */}
          <div className="border-t border-zinc-800/60 mb-10" />

          {/* ── Blocks ── */}
          <div className="space-y-1">
            {blocks.map((block, idx) => (
              <BlockRow
                key={block.id}
                block={block}
                index={idx}
                total={blocks.length}
                isActive={activeId === block.id}
                onFocus={() => setActiveId(block.id)}
                onUpdate={u => upd(block.id, u)}
                onDelete={() => del(block.id)}
                onMoveUp={() => moveUp(block.id)}
                onMoveDown={() => moveDown(block.id)}
                onChangeType={t => changeType(block.id, t)}
                showPicker={picker === block.id}
                onTogglePicker={() => setPicker(picker === block.id ? null : block.id)}
                onPickerSelect={t => insertAfter(block.id, t)}
              />
            ))}
          </div>

          {/* ── Add block at end ── */}
          <button onClick={addAtEnd}
            className="mt-10 flex items-center gap-2 text-zinc-600 hover:text-zinc-400 text-sm transition-colors group">
            <span className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
              <Plus size={13} />
            </span>
            Add a new block
          </button>
        </div>
      </main>
    </div>
  );
}