import { notification } from 'antd';

interface NotificationProps {
    message?: string
    description?: string
}

const openNotification = ({ message, description }: NotificationProps) => {
  notification.success({
    message,
    description,
    placement: 'top',
  });
};

const openErrorNotification = ({ message, description }: NotificationProps) => {
  notification.error({
    message,
    description,
    placement: 'top',
  });
};

export const useToast = () => {
  return  { notify: openNotification, notifyError: openErrorNotification };
};
