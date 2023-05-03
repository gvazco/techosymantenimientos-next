import { v4 as uuid } from "uuid";

export const mapSocialMenuItems = (socialItems) => {
  return socialItems.map((socialItem) => ({
    id: uuid(),
    destination: socialItem.socialItem.destination.url,
    label: socialItem.socialItem.label,
    setIcon: socialItem.socialItem.setIcon,
  }));
};
