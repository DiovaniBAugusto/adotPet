export interface SessionServiceProps {
  handle: (sID: string) => Promise<ISession | null>;
}
