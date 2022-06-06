import { SessionServiceProps } from "./interfaces/SessionService-Interface";
import { prisma } from "./lib/dbClient";

class GetSessionData implements SessionServiceProps {
  async handle(sID: string) {
    const sessionInfo = await prisma.session.findFirst({
      where: {
        sid: sID,
      },
    });

    if (!sessionInfo) {
      return null;
    }

    return {
      sid: sessionInfo.sid,
      sess: sessionInfo.sess,
      expire: sessionInfo.expire,
    };
  }
}
export { GetSessionData };
