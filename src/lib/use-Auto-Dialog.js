import { useState, useEffect } from 'react';

export const useAutoPopup = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Show the dialog after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 3000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const closeDialog = () => {
    setShowDialog(false);
  };

  return { showDialog, closeDialog };
};
