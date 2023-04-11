import { useRef } from "react";
import { useToast } from "@chakra-ui/toast";
import Alert from "../../components/common/SharedComponents/Alert/Alert";
export default function useAlert() {
  const toast = useToast();
  const toastRef = useRef({});
  const closeToast = () => {
    if (toastRef.current) {
      toast.close(toastRef.current);
    }
  };
  const showAlert = ({
    type,
    title,
    body,
    position,
    duration,
    canClose,
    onClose,
  }) => {
    toastRef.current = toast({
      position: position || "top-right",
      duration: duration || 2000,
      onCloseComplete: onClose || (() => {}),
      render: () => {
        return (
          <Alert
            type={type}
            title={title}
            body={body}
            close={closeToast}
            canClose={canClose}
          />
        );
      },
    });
  };
  return { showAlert, closeAlert: closeToast };
}
