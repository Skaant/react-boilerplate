import React, { useMemo } from "react";
import { Zum } from "../../types/zums/Zum";

export default function ProgressBar({
  label,
  value,
  zums,
  clickZum,
  max,
  prod,
  mode = "light",
}: {
  label?: string;
  value?: number;
  zums?: Zum[];
  clickZum?: (id: Zum["id"]) => void;
  max?: number;
  prod?: number;
  mode?: "light" | "dark";
}) {
  const _zums = useMemo(
    () =>
      zums && (
        <div className="zums d-flex gap-1">
          {zums.map(({ id, name }) => (
            <div
              key={id}
              className="pointer badge-s bg-zum text-light"
              onClick={() => clickZum?.(id)}
            >
              {name}
            </div>
          ))}
        </div>
      ),
    [zums, clickZum]
  );
  return (
    <div className="progress-bar mb-2">
      <div className="label d-flex justify-between">
        {label && (
          <div>
            <span>{label}</span>
          </div>
        )}
        <div className="d-flex justify-between">
          <span>
            {value || (max ? 0 : "")}
            {max ? ` / ${max}` : ""}
          </span>
          {prod ? (
            <span className="ml-1">
              {value || max ? "(" : ""}
              {prod > 0 ? "+" : ""}
              {prod} / tour
              {value || max ? ")" : ""}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {((value !== undefined && value >= 0) ||
        (max !== undefined && max >= 0)) &&
        (((zums && zums.length) || max || value!) > 12 ? (
          <div
            className={`bar bg-${
              mode === "light" ? "light-darkest" : "light-darker"
            } w-100`}
          >
            {value && (
              <div
                className={mode === "light" ? "bg-light" : "dark-lighter"}
                style={{
                  width: max
                    ? `${((zums ? zums.length : value) / max) * 100}%`
                    : "100%",
                }}
              />
            )}
          </div>
        ) : (
          _zums || (
            <div className="items d-flex gap-1">
              {Array.from(
                {
                  length:
                    (max && Math.max(max, 0)) ||
                    (value && Math.max(value, 0)) ||
                    1,
                },
                (_, i) => (
                  <div
                    key={i}
                    className={`bg-${
                      !value || value <= 0
                        ? mode === "light"
                          ? "light-darkest"
                          : "light-darker"
                        : i < value || !max
                        ? mode === "light"
                          ? "light"
                          : "dark-lighter"
                        : mode === "light"
                        ? "light-darkest"
                        : "light-darker"
                    }`}
                  />
                )
              )}
            </div>
          )
        ))}
    </div>
  );
}
