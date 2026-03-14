import { useState } from "react";

export default function EmailWithReactUI() {
  const [activeTab, setActiveTab] = useState("user-welcome");
  return (
    <div dir="ltr" data-orientation="vertical" className="rounded-3xl border border-slate-600">
        <header className="flex h-12 items-center border-b border-slate-600 px-4">
        <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
            <div aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
            <div aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
            <div aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
            </div>

            <div className="flex justify-end gap-2">
            <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="off">
                <span
                data-state="unchecked"
                aria-label="Email view mode"
                className="group hidden items-center rounded-lg border border-slate-600 md:flex"
                >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-l-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='unchecked']:bg-slate-2 group-data-[state='unchecked']:text-white">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        d="M9.75 15.25H17.25C18.3546 15.25 19.25 14.3546 19.25 13.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V13.25C4.75 14.3546 5.64543 15.25 6.75 15.25H9.75ZM9.75 15.25C9.75 15.25 10 18.25 8 19.25H16C14 18.25 14.25 15.25 14.25 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                    </svg>
                </div>

                <div className="inline-flex h-8 w-8 items-center justify-center rounded-r-lg text-white/70 transition duration-200 ease-in-out hover:text-white group-data-[state='checked']:bg-slate-2 group-data-[state='checked']:text-white">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V17.25C17.25 18.3546 16.3546 19.25 15.25 19.25H8.75C7.64543 19.25 6.75 18.3546 6.75 17.25V6.75Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M12.25 16.75H11.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                    </svg>
                </div>
                </span>
            </button>

            <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="off">
                <span
                data-state="unchecked"
                aria-label="Email appearance mode"
                className="group hidden items-center rounded-lg border border-slate-600 md:flex"
                >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-l-lg text-slate-11 transition duration-200 ease-in-out hover:text-slate-12 group-data-[state='unchecked']:bg-slate-2 group-data-[state='unchecked']:text-white">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        d="M18.4895 14.6292L19.1845 14.911L19.8372 13.3015L18.2181 13.93L18.4895 14.6292ZM13.1969 5.10193L13.6478 5.70128L15.0352 4.6576L13.3242 4.36282L13.1969 5.10193ZM18.2181 13.93C17.6863 14.1364 17.1073 14.25 16.5 14.25V15.75C17.2959 15.75 18.0587 15.6009 18.7609 15.3283L18.2181 13.93ZM16.5 14.25C13.8766 14.25 11.75 12.1234 11.75 9.5H10.25C10.25 12.9518 13.0482 15.75 16.5 15.75V14.25ZM11.75 9.5C11.75 7.94766 12.4939 6.56927 13.6478 5.70128L12.746 4.50257C11.2317 5.64172 10.25 7.45633 10.25 9.5H11.75ZM12 5.75C12.3652 5.75 12.7225 5.78124 13.0696 5.84104L13.3242 4.36282C12.8934 4.28859 12.4509 4.25 12 4.25V5.75ZM5.75 12C5.75 8.54822 8.54822 5.75 12 5.75V4.25C7.71979 4.25 4.25 7.71979 4.25 12H5.75ZM12 18.25C8.54822 18.25 5.75 15.4518 5.75 12H4.25C4.25 16.2802 7.71979 19.75 12 19.75V18.25ZM17.7945 14.3473C16.8658 16.6372 14.6204 18.25 12 18.25V19.75C15.2519 19.75 18.0342 17.7474 19.1845 14.911L17.7945 14.3473Z"
                        fill="currentColor"
                    />
                    </svg>
                </div>

                <div className="inline-flex h-8 w-8 items-center justify-center rounded-r-lg text-white/70 transition duration-200 ease-in-out hover:text-white group-data-[state='checked']:bg-slate-2 group-data-[state='checked']:text-white">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12ZM6.34319 7.7574C5.95266 7.36688 5.95266 6.73371 6.34319 6.34319C6.73371 5.95266 7.36688 5.95266 7.7574 6.34319C8.14792 6.73371 8.14792 7.36688 7.7574 7.7574C7.36688 8.14792 6.73371 8.14792 6.34319 7.7574ZM6.34319 17.6569C5.95266 17.2664 5.95266 16.6332 6.34319 16.2427C6.73371 15.8522 7.36688 15.8522 7.7574 16.2427C8.14792 16.6332 8.14792 17.2664 7.7574 17.6569C7.36688 18.0474 6.73371 18.0474 6.34319 17.6569ZM16.2427 7.7574C15.8522 7.36688 15.8522 6.73371 16.2427 6.34319C16.6332 5.95266 17.2664 5.95266 17.6569 6.34319C18.0474 6.73371 18.0474 7.36688 17.6569 7.7574C17.2664 8.14792 16.6332 8.14792 16.2427 7.7574ZM16.2427 17.6569C15.8522 17.2664 15.8522 16.6332 16.2427 16.2427C16.6332 15.8522 17.2664 15.8522 17.6569 16.2427C18.0474 16.6332 18.0474 17.2664 17.6569 17.6569C17.2664 18.0474 16.6332 18.0474 16.2427 17.6569Z"
                        fill="currentColor"
                    />
                    </svg>
                </div>
                </span>
            </button>
            </div>
        </div>
        </header>
        <div className="flex w-full flex-col justify-between md:flex-row">
            <aside className="flex-shrink-0 w-full overflow-auto border-b border-slate-600 px-2 py-2.5 md:min-w-[12.5rem] md:max-w-[12.5rem] md:border-b-0 md:border-r">
            <div>
                <div
                role="tablist"
                aria-orientation="vertical"
                className="flex gap-2 md:flex-col"
                tabIndex={0}
                data-orientation="vertical"
                style={{ outline: "none" }}
                >
                <button
                    type="button"
                    role="tab"
                    onClick={() => setActiveTab("user-welcome")}
                    aria-selected={activeTab === "user-welcome"}
                    data-state={activeTab === "user-welcome" ? "active" : "inactive"}
                    className="inline-flex h-8 shrink-0 items-center gap-1 rounded-sm pl-1 pr-2 text-sm text-white/70 outline-hidden transition duration-200 ease-in-out md:flex md:px-1 hover:bg-white/10 hover:text-white focus-visible:bg-slate-400 focus-visible:text-slate-400 data-[state='active']:text-blue-500"
                    tabIndex={0}
                    data-orientation="vertical"
                    data-radix-collection-item
                >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <rect
                        fill="currentColor"
                        fillOpacity="0.25"
                        height="16"
                        rx="3"
                        width="16"
                        x="4"
                        y="4"
                    />
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M13.9043 16.732V18.2964C14.1587 18.4268 14.4594 18.5245 14.8067 18.5897C15.1539 18.6549 15.5199 18.6875 15.9047 18.6875C16.2796 18.6875 16.6358 18.6517 16.9733 18.5799C17.3107 18.5083 17.6067 18.3901 17.861 18.2255C18.1153 18.0609 18.3166 17.8458 18.465 17.5802C18.6133 17.3146 18.6875 16.9862 18.6875 16.5951C18.6875 16.3116 18.6451 16.0631 18.5603 15.8496C18.4756 15.6361 18.3533 15.4463 18.1935 15.2801C18.0338 15.1138 17.8422 14.9647 17.6189 14.8327C17.3955 14.7007 17.1437 14.5761 16.8632 14.4587C16.6578 14.374 16.4736 14.2917 16.3106 14.2119C16.1476 14.132 16.009 14.0505 15.8949 13.9674C15.7807 13.8843 15.6927 13.7963 15.6308 13.7034C15.5688 13.6105 15.5378 13.5054 15.5378 13.3881C15.5378 13.2806 15.5656 13.1836 15.621 13.0972C15.6764 13.0108 15.7547 12.9367 15.8558 12.8748C15.9568 12.8129 16.0807 12.7648 16.2274 12.7306C16.3742 12.6963 16.5372 12.6792 16.7165 12.6792C16.8469 12.6792 16.9847 12.689 17.1298 12.7086C17.2749 12.7281 17.4208 12.7583 17.5675 12.799C17.7143 12.8397 17.8569 12.8911 17.9955 12.953C18.134 13.0149 18.262 13.0866 18.3794 13.1681V11.7064C18.1414 11.6151 17.8813 11.5475 17.5993 11.5035C17.3173 11.4595 16.9937 11.4375 16.6285 11.4375C16.2568 11.4375 15.9047 11.4774 15.5721 11.5573C15.2395 11.6371 14.9469 11.7618 14.6942 11.9313C14.4415 12.1008 14.2418 12.3167 14.0951 12.579C13.9484 12.8414 13.875 13.1551 13.875 13.5201C13.875 13.9862 14.0095 14.3838 14.2785 14.713C14.5475 15.0421 14.9558 15.3208 15.5036 15.5489C15.7188 15.6369 15.9193 15.7233 16.1052 15.808C16.291 15.8928 16.4516 15.9808 16.5869 16.072C16.7222 16.1633 16.829 16.2627 16.9073 16.3702C16.9855 16.4778 17.0247 16.6 17.0247 16.7369C17.0247 16.8379 17.0002 16.9316 16.9513 17.018C16.9024 17.1044 16.8282 17.1793 16.7288 17.2429C16.6293 17.3064 16.5054 17.3561 16.3571 17.392C16.2087 17.4278 16.0351 17.4458 15.8362 17.4458C15.4971 17.4458 15.1613 17.3863 14.8287 17.2673C14.4961 17.1484 14.188 16.9699 13.9043 16.732ZM11.2744 12.8776H13.2812V11.5938H7.6875V12.8776H9.68456V18.5938H11.2744V12.8776Z"
                        fill="currentColor"
                    />
                    </svg>
                    user-welcome.tsx
                </button>

                <button
                    type="button"
                    role="tab"
                    onClick={() => setActiveTab("reset-password")}
                    aria-selected={activeTab === "reset-password"}
                    data-state={activeTab === "reset-password" ? "active" : "inactive"}
                    className="inline-flex h-8 shrink-0 items-center gap-1 rounded-sm pl-1 pr-2 text-sm text-white/70 outline-hidden transition duration-200 ease-in-out md:flex md:px-1 hover:bg-white/10 hover:text-white focus-visible:bg-slate-400 focus-visible:text-slate-400 data-[state='active']:text-blue-500"
                    tabIndex={0}
                    data-orientation="vertical"
                    data-radix-collection-item
                >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <rect
                        fill="currentColor"
                        fillOpacity="0.25"
                        height="16"
                        rx="3"
                        width="16"
                        x="4"
                        y="4"
                    />
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M13.9043 16.732V18.2964C14.1587 18.4268 14.4594 18.5245 14.8067 18.5897C15.1539 18.6549 15.5199 18.6875 15.9047 18.6875C16.2796 18.6875 16.6358 18.6517 16.9733 18.5799C17.3107 18.5083 17.6067 18.3901 17.861 18.2255C18.1153 18.0609 18.3166 17.8458 18.465 17.5802C18.6133 17.3146 18.6875 16.9862 18.6875 16.5951C18.6875 16.3116 18.6451 16.0631 18.5603 15.8496C18.4756 15.6361 18.3533 15.4463 18.1935 15.2801C18.0338 15.1138 17.8422 14.9647 17.6189 14.8327C17.3955 14.7007 17.1437 14.5761 16.8632 14.4587C16.6578 14.374 16.4736 14.2917 16.3106 14.2119C16.1476 14.132 16.009 14.0505 15.8949 13.9674C15.7807 13.8843 15.6927 13.7963 15.6308 13.7034C15.5688 13.6105 15.5378 13.5054 15.5378 13.3881C15.5378 13.2806 15.5656 13.1836 15.621 13.0972C15.6764 13.0108 15.7547 12.9367 15.8558 12.8748C15.9568 12.8129 16.0807 12.7648 16.2274 12.7306C16.3742 12.6963 16.5372 12.6792 16.7165 12.6792C16.8469 12.6792 16.9847 12.689 17.1298 12.7086C17.2749 12.7281 17.4208 12.7583 17.5675 12.799C17.7143 12.8397 17.8569 12.8911 17.9955 12.953C18.134 13.0149 18.262 13.0866 18.3794 13.1681V11.7064C18.1414 11.6151 17.8813 11.5475 17.5993 11.5035C17.3173 11.4595 16.9937 11.4375 16.6285 11.4375C16.2568 11.4375 15.9047 11.4774 15.5721 11.5573C15.2395 11.6371 14.9469 11.7618 14.6942 11.9313C14.4415 12.1008 14.2418 12.3167 14.0951 12.579C13.9484 12.8414 13.875 13.1551 13.875 13.5201C13.875 13.9862 14.0095 14.3838 14.2785 14.713C14.5475 15.0421 14.9558 15.3208 15.5036 15.5489C15.7188 15.6369 15.9193 15.7233 16.1052 15.808C16.291 15.8928 16.4516 15.9808 16.5869 16.072C16.7222 16.1633 16.829 16.2627 16.9073 16.3702C16.9855 16.4778 17.0247 16.6 17.0247 16.7369C17.0247 16.8379 17.0002 16.9316 16.9513 17.018C16.9024 17.1044 16.8282 17.1793 16.7288 17.2429C16.6293 17.3064 16.5054 17.3561 16.3571 17.392C16.2087 17.4278 16.0351 17.4458 15.8362 17.4458C15.4971 17.4458 15.1613 17.3863 14.8287 17.2673C14.4961 17.1484 14.188 16.9699 13.9043 16.732ZM11.2744 12.8776H13.2812V11.5938H7.6875V12.8776H9.68456V18.5938H11.2744V12.8776Z"
                        fill="currentColor"
                    />
                    </svg>
                    reset-password.tsx
                </button>

                <button
                    type="button"
                    role="tab"
                    onClick={() => setActiveTab("user-invite")}
                    aria-selected={activeTab === "user-invite"}
                    data-state={activeTab === "user-invite" ? "active" : "inactive"}
                    className="inline-flex h-8 shrink-0 items-center gap-1 rounded-sm pl-1 pr-2 text-sm text-white/70 outline-hidden transition duration-200 ease-in-out md:flex md:px-1 hover:bg-white/10 hover:text-white focus-visible:bg-slate-400 focus-visible:text-slate-400 data-[state='active']:text-blue-500"
                    tabIndex={0}
                    data-orientation="vertical"
                    data-radix-collection-item
                >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <rect
                        fill="currentColor"
                        fillOpacity="0.25"
                        height="16"
                        rx="3"
                        width="16"
                        x="4"
                        y="4"
                    />
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M13.9043 16.732V18.2964C14.1587 18.4268 14.4594 18.5245 14.8067 18.5897C15.1539 18.6549 15.5199 18.6875 15.9047 18.6875C16.2796 18.6875 16.6358 18.6517 16.9733 18.5799C17.3107 18.5083 17.6067 18.3901 17.861 18.2255C18.1153 18.0609 18.3166 17.8458 18.465 17.5802C18.6133 17.3146 18.6875 16.9862 18.6875 16.5951C18.6875 16.3116 18.6451 16.0631 18.5603 15.8496C18.4756 15.6361 18.3533 15.4463 18.1935 15.2801C18.0338 15.1138 17.8422 14.9647 17.6189 14.8327C17.3955 14.7007 17.1437 14.5761 16.8632 14.4587C16.6578 14.374 16.4736 14.2917 16.3106 14.2119C16.1476 14.132 16.009 14.0505 15.8949 13.9674C15.7807 13.8843 15.6927 13.7963 15.6308 13.7034C15.5688 13.6105 15.5378 13.5054 15.5378 13.3881C15.5378 13.2806 15.5656 13.1836 15.621 13.0972C15.6764 13.0108 15.7547 12.9367 15.8558 12.8748C15.9568 12.8129 16.0807 12.7648 16.2274 12.7306C16.3742 12.6963 16.5372 12.6792 16.7165 12.6792C16.8469 12.6792 16.9847 12.689 17.1298 12.7086C17.2749 12.7281 17.4208 12.7583 17.5675 12.799C17.7143 12.8397 17.8569 12.8911 17.9955 12.953C18.134 13.0149 18.262 13.0866 18.3794 13.1681V11.7064C18.1414 11.6151 17.8813 11.5475 17.5993 11.5035C17.3173 11.4595 16.9937 11.4375 16.6285 11.4375C16.2568 11.4375 15.9047 11.4774 15.5721 11.5573C15.2395 11.6371 14.9469 11.7618 14.6942 11.9313C14.4415 12.1008 14.2418 12.3167 14.0951 12.579C13.9484 12.8414 13.875 13.1551 13.875 13.5201C13.875 13.9862 14.0095 14.3838 14.2785 14.713C14.5475 15.0421 14.9558 15.3208 15.5036 15.5489C15.7188 15.6369 15.9193 15.7233 16.1052 15.808C16.291 15.8928 16.4516 15.9808 16.5869 16.072C16.7222 16.1633 16.829 16.2627 16.9073 16.3702C16.9855 16.4778 17.0247 16.6 17.0247 16.7369C17.0247 16.8379 17.0002 16.9316 16.9513 17.018C16.9024 17.1044 16.8282 17.1793 16.7288 17.2429C16.6293 17.3064 16.5054 17.3561 16.3571 17.392C16.2087 17.4278 16.0351 17.4458 15.8362 17.4458C15.4971 17.4458 15.1613 17.3863 14.8287 17.2673C14.4961 17.1484 14.188 16.9699 13.9043 16.732ZM11.2744 12.8776H13.2812V11.5938H7.6875V12.8776H9.68456V18.5938H11.2744V12.8776Z"
                        fill="currentColor"
                    />
                    </svg>
                    user-invite.tsx
                </button>

                <button
                    type="button"
                    role="tab"
                    onClick={() => setActiveTab("weekly-digest")}
                    aria-selected={activeTab === "weekly-digest"}
                    data-state={activeTab === "weekly-digest" ? "active" : "inactive"}
                    className="inline-flex h-8 shrink-0 items-center gap-1 rounded-sm pl-1 pr-2 text-sm text-white/70 outline-hidden transition duration-200 ease-in-out md:flex md:px-1 hover:bg-white/10 hover:text-white focus-visible:bg-slate-400 focus-visible:text-slate-400 data-[state='active']:text-blue-500"
                    tabIndex={0}
                    data-orientation="vertical"
                    data-radix-collection-item
                >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <rect
                        fill="currentColor"
                        fillOpacity="0.25"
                        height="16"
                        rx="3"
                        width="16"
                        x="4"
                        y="4"
                    />
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M13.9043 16.732V18.2964C14.1587 18.4268 14.4594 18.5245 14.8067 18.5897C15.1539 18.6549 15.5199 18.6875 15.9047 18.6875C16.2796 18.6875 16.6358 18.6517 16.9733 18.5799C17.3107 18.5083 17.6067 18.3901 17.861 18.2255C18.1153 18.0609 18.3166 17.8458 18.465 17.5802C18.6133 17.3146 18.6875 16.9862 18.6875 16.5951C18.6875 16.3116 18.6451 16.0631 18.5603 15.8496C18.4756 15.6361 18.3533 15.4463 18.1935 15.2801C18.0338 15.1138 17.8422 14.9647 17.6189 14.8327C17.3955 14.7007 17.1437 14.5761 16.8632 14.4587C16.6578 14.374 16.4736 14.2917 16.3106 14.2119C16.1476 14.132 16.009 14.0505 15.8949 13.9674C15.7807 13.8843 15.6927 13.7963 15.6308 13.7034C15.5688 13.6105 15.5378 13.5054 15.5378 13.3881C15.5378 13.2806 15.5656 13.1836 15.621 13.0972C15.6764 13.0108 15.7547 12.9367 15.8558 12.8748C15.9568 12.8129 16.0807 12.7648 16.2274 12.7306C16.3742 12.6963 16.5372 12.6792 16.7165 12.6792C16.8469 12.6792 16.9847 12.689 17.1298 12.7086C17.2749 12.7281 17.4208 12.7583 17.5675 12.799C17.7143 12.8397 17.8569 12.8911 17.9955 12.953C18.134 13.0149 18.262 13.0866 18.3794 13.1681V11.7064C18.1414 11.6151 17.8813 11.5475 17.5993 11.5035C17.3173 11.4595 16.9937 11.4375 16.6285 11.4375C16.2568 11.4375 15.9047 11.4774 15.5721 11.5573C15.2395 11.6371 14.9469 11.7618 14.6942 11.9313C14.4415 12.1008 14.2418 12.3167 14.0951 12.579C13.9484 12.8414 13.875 13.1551 13.875 13.5201C13.875 13.9862 14.0095 14.3838 14.2785 14.713C14.5475 15.0421 14.9558 15.3208 15.5036 15.5489C15.7188 15.6369 15.9193 15.7233 16.1052 15.808C16.291 15.8928 16.4516 15.9808 16.5869 16.072C16.7222 16.1633 16.829 16.2627 16.9073 16.3702C16.9855 16.4778 17.0247 16.6 17.0247 16.7369C17.0247 16.8379 17.0002 16.9316 16.9513 17.018C16.9024 17.1044 16.8282 17.1793 16.7288 17.2429C16.6293 17.3064 16.5054 17.3561 16.3571 17.392C16.2087 17.4278 16.0351 17.4458 15.8362 17.4458C15.4971 17.4458 15.1613 17.3863 14.8287 17.2673C14.4961 17.1484 14.188 16.9699 13.9043 16.732ZM11.2744 12.8776H13.2812V11.5938H7.6875V12.8776H9.68456V18.5938H11.2744V12.8776Z"
                        fill="currentColor"
                    />
                    </svg>
                    weeekly-digest.tsx
                </button>

                </div>
            </div>
            </aside>
            <div
            data-state="active"
            data-orientation="vertical"
            role="tabpanel"
            aria-labelledby="radix-_R_1k9br9fstb_-trigger-user-welcome.tsx"
            id="radix-_R_1k9br9fstb_-content-user-welcome.tsx"
            tabIndex={0}
            className="flex w-full justify-between outline-hidden focus-visible:ring-2 focus-visible:ring-slate-6 flex-col md:max-w-[calc(100%_-_12.5rem)] md:flex-row"
            >
            {/* CODE VIEW */}
            <div className="disable-children-scrolling dark:bg-background z-20 w-full rounded-[.25rem] bg-black selection:bg-white/20 selection:text-white order-2 max-h-[400px] min-h-[300px] overflow-auto md:order-none md:max-h-[650px] md:min-h-[500px] hidden md:block">
                <div className="h-full w-full overflow-auto rounded-[.25rem]">
                <pre
                    className="relative overflow-auto py-4 pr-2.5 h-full text-xs"
                    style={{
                    color: "rgb(235, 236, 237)",
                    backgroundColor: "transparent",
                    }}
                >
                    {/* ⛔ Extremely long code block kept as-is */}
                    {/* This content is STATIC and already JSX-safe */}
                    

                </pre>
                </div>
            </div>
            

            {/* EMAIL PREVIEW */}
            <div className="w-full p-2.5">
            <div
                className="mx-auto h-full max-h-[800px] min-h-[600px] flex-1 overflow-hidden rounded-2xl text-sm max-w-full p-8 leading-[24px] text-slate-200 pointer-events-none"
                style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                backgroundImage:
                    "radial-gradient(100% 50% at 50% 0%, rgba(0,163,255,0.13) 0%, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%)",
                backgroundColor: "#0b0b0f",
                }}
            >
                {/* Logo */}
                <div className="mt-6 text-center">
                <img
                    src="/pagedemo/example-logo.webp"
                    alt="Logo Example"
                    width={80}
                    height={80}
                    className="mx-auto block"
                />
                </div>

                {/* Heading */}
                <h2 className="text-[24px] font-normal text-center my-[30px] leading-[1.4]">
                Welcome to <strong>ACME</strong>, user!
                </h2>

                {/* Body Text */}
                <p className="my-4">Hello Steve,</p>

                <p className="my-4">
                We're excited to have you onboard at <strong>ACME</strong>. We hope you
                enjoy your journey with us. If you have any questions or need
                assistance, feel free to reach out.
                </p>

                {/* Button */}
                <div className="text-center my-8">
                <a
                    href="/get-started"
                    className="inline-block px-5 py-3 rounded bg-[#00A3FF] text-white font-semibold no-underline"
                >
                    Get Started
                </a>
                </div>

                {/* Footer */}
                <p className="my-4">
                Cheers,
                <br />
                The ACME Team
                </p>
            </div>
            </div>
            </div>

        </div>
    </div>
  );
}
