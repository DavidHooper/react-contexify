import React from 'react';
import { RefTracker } from '../hooks';
/**
 * Access parent ref tracker.
 */
export declare function useRefTrackerContext(): Map<HTMLElement, import("../hooks").RefTrackerValue>;
export interface RefTrackerProviderProps {
    refTracker: RefTracker;
}
export declare const RefTrackerProvider: React.FC<RefTrackerProviderProps>;
