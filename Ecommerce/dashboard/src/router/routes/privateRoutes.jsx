import { sellerRoutes } from "./sellerRoutes";
import { adminRoutes } from "./adminRoutes";

export const privateRoutes = [
    ...sellerRoutes,
    ...adminRoutes,
]