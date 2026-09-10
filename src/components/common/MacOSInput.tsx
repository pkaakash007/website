import React, { useState } from "react";
import { Search, X, Check } from "lucide-react";

// ─── 1. MacOS Standard Input Field ───────────────────────────────────────────

export interface MacOSInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  requiredIndicator?: boolean;
  icon?: React.ElementType;
  error?: string;
  helperText?: string;
  onClear?: () => void;
  showClearButton?: boolean;
}

export const MacOSInput = React.forwardRef<HTMLInputElement, MacOSInputProps>(
  (
    {
      label,
      requiredIndicator = false,
      icon: Icon,
      error,
      helperText,
      onClear,
      showClearButton = false,
      className = "",
      value,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-[12px] font-semibold text-neutral-700 tracking-tight select-none">
            {label}
            {requiredIndicator && (
              <span className="text-[#FF3B30] ml-1 font-bold">*</span>
            )}
          </label>
        )}

        <div className="relative flex items-center">
          {Icon && (
            <div className="absolute left-3 text-neutral-400 pointer-events-none flex items-center justify-center">
              <Icon className="w-4 h-4" />
            </div>
          )}

          <input
            ref={ref}
            value={value}
            className={`w-full ${
              Icon ? "pl-9" : "px-3.5"
            } ${showClearButton && value ? "pr-9" : "pr-3.5"} py-2.5 rounded-[9px] bg-white border border-black/[0.14] text-[13.5px] text-neutral-900 placeholder:text-neutral-400/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150 ease-out hover:border-black/[0.25] focus:outline-none focus:border-[#0071E3] focus:ring-[3px] focus:ring-[#0071E3]/25 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed ${
              error
                ? "border-[#FF3B30] focus:border-[#FF3B30] focus:ring-[#FF3B30]/25"
                : ""
            } ${className}`}
            style={{
              fontFamily: "var(--font-system)",
            }}
            {...props}
          />

          {showClearButton && value && onClear && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-2.5 p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Clear input"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {error && (
          <p className="text-[11.5px] font-medium text-[#FF3B30] tracking-tight">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-[11.5px] text-neutral-400 tracking-tight">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

MacOSInput.displayName = "MacOSInput";

// ─── 2. MacOS Search Field (Pill Shape with ⌘K Badge & Clear Button) ──────────

export interface MacOSSearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  shortcutBadge?: string;
}

export const MacOSSearchInput = React.forwardRef<
  HTMLInputElement,
  MacOSSearchInputProps
>(({ onClear, shortcutBadge = "⌘K", className = "", value, ...props }, ref) => {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-3.5 text-neutral-400 pointer-events-none flex items-center justify-center">
        <Search className="w-4 h-4" />
      </div>

      <input
        ref={ref}
        type="search"
        value={value}
        className={`w-full pl-10 ${
          shortcutBadge || (value && onClear) ? "pr-16" : "pr-4"
        } py-2 rounded-full bg-neutral-100/90 hover:bg-neutral-100 border border-black/[0.09] text-[13.5px] text-neutral-900 placeholder:text-neutral-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150 ease-out focus:outline-none focus:bg-white focus:border-[#0071E3] focus:ring-[3px] focus:ring-[#0071E3]/25 ${className}`}
        style={{
          fontFamily: "var(--font-system)",
        }}
        {...props}
      />

      <div className="absolute right-3 flex items-center gap-1.5">
        {value && onClear ? (
          <button
            type="button"
            onClick={onClear}
            className="w-4 h-4 rounded-full bg-neutral-300 hover:bg-neutral-400 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Clear search"
          >
            <X className="w-2.5 h-2.5" strokeWidth={3} />
          </button>
        ) : shortcutBadge ? (
          <kbd className="hidden sm:inline-flex items-center text-[10.5px] font-semibold text-neutral-400 bg-black/[0.04] border border-black/[0.06] px-1.5 py-0.5 rounded tracking-tight select-none">
            {shortcutBadge}
          </kbd>
        ) : null}
      </div>
    </div>
  );
});

MacOSSearchInput.displayName = "MacOSSearchInput";

// ─── 3. MacOS Text Area ──────────────────────────────────────────────────────

export interface MacOSTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  requiredIndicator?: boolean;
  error?: string;
  helperText?: string;
}

export const MacOSTextarea = React.forwardRef<
  HTMLTextAreaElement,
  MacOSTextareaProps
>(
  (
    {
      label,
      requiredIndicator = false,
      error,
      helperText,
      className = "",
      rows = 4,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-[12px] font-semibold text-neutral-700 tracking-tight select-none">
            {label}
            {requiredIndicator && (
              <span className="text-[#FF3B30] ml-1 font-bold">*</span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          className={`w-full px-3.5 py-2.5 rounded-[9px] bg-white border border-black/[0.14] text-[13.5px] text-neutral-900 placeholder:text-neutral-400/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150 ease-out hover:border-black/[0.25] focus:outline-none focus:border-[#0071E3] focus:ring-[3px] focus:ring-[#0071E3]/25 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed resize-none ${
            error
              ? "border-[#FF3B30] focus:border-[#FF3B30] focus:ring-[#FF3B30]/25"
              : ""
          } ${className}`}
          style={{
            fontFamily: "var(--font-system)",
          }}
          {...props}
        />

        {error && (
          <p className="text-[11.5px] font-medium text-[#FF3B30] tracking-tight">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-[11.5px] text-neutral-400 tracking-tight">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

MacOSTextarea.displayName = "MacOSTextarea";

// ─── 4. MacOS Segmented Picker Control ───────────────────────────────────────

export interface MacOSSegmentedOption {
  value: string;
  label: string;
  icon?: React.ElementType;
}

export interface MacOSSegmentedControlProps {
  options: MacOSSegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export const MacOSSegmentedControl: React.FC<MacOSSegmentedControlProps> = ({
  options,
  value,
  onChange,
  className = "",
  size = "md",
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-[10px] bg-black/[0.06] border border-black/[0.04] select-none ${className}`}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer ${
              size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-xs"
            } rounded-[7px] ${
              isActive
                ? "bg-white text-neutral-900 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)]"
                : "text-neutral-600 hover:text-neutral-900 font-medium"
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ─── 5. MacOS Toggle Switch ──────────────────────────────────────────────────

export interface MacOSToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  color?: "green" | "blue";
  disabled?: boolean;
}

export const MacOSToggle: React.FC<MacOSToggleProps> = ({
  checked,
  onChange,
  label,
  color = "green",
  disabled = false,
}) => {
  const activeColor = color === "green" ? "bg-[#34C759]" : "bg-[#0071E3]";

  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0071E3]/30 ${
          checked ? activeColor : "bg-neutral-200"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label && (
        <span className="text-[13px] font-medium text-neutral-700">
          {label}
        </span>
      )}
    </label>
  );
};

// ─── 6. MacOS Checkbox ───────────────────────────────────────────────────────

export interface MacOSCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}

export const MacOSCheckbox: React.FC<MacOSCheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`w-4 h-4 rounded-[5px] flex items-center justify-center transition-all duration-150 cursor-pointer border ${
          checked
            ? "bg-[#0071E3] border-[#0071E3] text-white shadow-xs"
            : "bg-white border-black/20 hover:border-black/35"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {checked && <Check className="w-3 h-3 stroke-[3]" />}
      </button>
      {label && (
        <span className="text-[12.5px] font-normal text-neutral-700">
          {label}
        </span>
      )}
    </label>
  );
};

export default MacOSInput;
