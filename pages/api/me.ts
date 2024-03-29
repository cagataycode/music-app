import { User } from "@prisma/client";
import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (req, res, user: User) => {
  try {
    const playlistsCount = await prisma.playlist.count({
      where: {
        userId: user.id,
      },
    });

    res.json({ ...user, playlistsCount });
  } catch (e) {
    res.json({ message: "me failed" });
  }
});
