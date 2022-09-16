import { Button, notification, Space } from "antd";

const openNotificationWithIcon = (type, mes, des) => {
  notification[type]({
    message: mes,
    description: des,
  });
};
export default openNotificationWithIcon;
