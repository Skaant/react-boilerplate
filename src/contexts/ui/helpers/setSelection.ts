import { State } from "../../../types/_helpers/State";
import { UIContextData, UISelection } from "../UIContext";

export function setSelection(
  [UI, setUI]: State<UIContextData>,
  selection?: UISelection
) {
  setUI({
    ...UI!,
    selection,
    selectionHistory: [
      ...UI!.selectionHistory,
      ...(UI!.selection ? [UI!.selection] : []),
    ],
  });
}
