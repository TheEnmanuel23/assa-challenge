import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useMemo } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTasks = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.entities);
  return tasks;
};

export const useContacts = () => {
  const contacts = useAppSelector((state) => state.contacts.entities);
  const loading = useAppSelector((state) => state.contacts.loading);

  return useMemo(() => [contacts, loading] as const, [contacts, loading]);
};
