export interface RefTrackerValue {
    node: HTMLElement;
    isSubmenu: boolean;
    submenuRefTracker?: RefTracker;
}
export declare type RefTracker = ReturnType<typeof useRefTracker>;
/**
 * Used to store children refs
 */
export declare function useRefTracker(): Map<HTMLElement, RefTrackerValue>;
