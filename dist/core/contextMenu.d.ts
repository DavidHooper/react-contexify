import { MenuId, TriggerEvent } from '../types';
export interface ShowContextMenuParams {
    id: MenuId;
    event: TriggerEvent;
    props?: any;
    position?: {
        x: number;
        y: number;
    } | null;
}
export interface ContextMenu {
    show: (params: ShowContextMenuParams) => void;
    hideAll: () => void;
}
declare const contextMenu: ContextMenu;
export { contextMenu };
