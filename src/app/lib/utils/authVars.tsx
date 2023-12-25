import { useAppSelector } from "@/app/redux/hooks";

export const isUserCreated = useAppSelector((state) => state.app.userCreated);
