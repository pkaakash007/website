/**
 * Lightweight Global Lead Modal Event Dispatcher
 * Allows any component to trigger the lead modal without bundling the modal UI components.
 */

export function openLeadModal(division?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-lead-modal", {
        detail: { division: division || "Multiple Solutions" },
      })
    );
  }
}
