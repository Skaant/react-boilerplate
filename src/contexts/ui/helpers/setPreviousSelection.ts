import { State } from "../../../types/_helpers/State";
import { UIContextData } from "../UIContext";

export function setPreviousSelection([UI, setUI]: State<UIContextData>) {
  const selectionHistory = [...UI!.selectionHistory];
  const selection = selectionHistory.pop();
  setUI({
    ...UI!,
    selection,
    selectionHistory,
  });
}
