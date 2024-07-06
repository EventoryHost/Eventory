import React from "react";
import { Calendar } from "@/components/ui/calendar";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  setSelectedDate,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="rounded-lg bg-white shadow-lg">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default Modal;
