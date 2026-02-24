/**
 * 全站動畫時長統一管理（單位：秒）
 * 改這裡即可同步 Hero、內文、Navigation、背景滑入等
 */

// ----- Hero 開場 -----
/** 標題總動畫時長 */
export const TOTAL_TITLE_DURATION_SEC = 2.6;

/** 內文與 Navigation 開始出現的延遲（與標題 blur 重疊） */
export const CONTENT_APPEAR_DELAY_SEC = 1.5;

/** 內文出現延遲（毫秒），給需要 ms 的組件用 */
export const CONTENT_APPEAR_DELAY_MS = CONTENT_APPEAR_DELAY_SEC * 1000;

/** 標題 keyframes 時間比例：0 出現 → 0.15 顯示完 → 0.5 停留 → 1 blur+淡出 */
export const TITLE_TIMES: [number, number, number, number] = [
  0, 0.15, 0.5, 1,
];

// ----- Navigation -----
/** 導航列淡入時長 */
export const NAV_FADE_DURATION_SEC = 0.7;

/** 導航背景漸層滑入時長（由左到右） */
export const NAV_BG_SLIDE_DURATION_SEC = 0.55;

/** 導航背景滑入：在「導航開始出現」後多久開始（緊接在淡入之後） */
export const NAV_BG_SLIDE_DELAY_AFTER_NAV_SEC = 0.7;

/** 無 Hero 延遲的頁面（如 /works）：導航背景滑入延遲 */
export const NAV_BG_SLIDE_DELAY_NO_HERO_SEC = 0.25;

// ----- Footer -----
/** Footer 背景漸層滑入延遲（由右到左） */
export const FOOTER_BG_SLIDE_DELAY_SEC = 0.3;

/** Footer 背景漸層滑入時長 */
export const FOOTER_BG_SLIDE_DURATION_SEC = 0.55;
