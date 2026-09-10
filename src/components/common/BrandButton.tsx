import React from "react";
import { Button, ButtonProps } from "./Button";

export interface BrandButtonProps extends ButtonProps {
  showEmblem?: boolean;
  showWatermark?: boolean;
}

/**
 * Real Result Signature Brand Button
 * Re-exports the unified common Button with signature brand defaults
 */
export const BrandButton: React.FC<BrandButtonProps> = (props) => {
  return <Button {...props} />;
};

export default BrandButton;
