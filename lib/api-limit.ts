import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

//Increase the count everyitme the API is pinged;
export const incrementApiLimit = async () => {
  const { userId } = auth();

  //ensuring user is singed in
  if (!userId) {
    return;
  }

  //checking if user is in the db
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  //if user is increase or else create 
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

//chekc if user is over the free limit
export const checkApiLimit = async () => {
  const { userId } = auth();

  //check user is signed in
  if (!userId) {
    return false;
  }

  //fetch the counts of user's usage
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  //check if they are over or under
  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};



//export as an asnync function 
export const getApiLimitCount = async () => {
  const { userId } = auth();

  //check if user is signed in
  if (!userId) {
    return 0;
  }

  //get user from remote db
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId
    }
  });

  //where user hasn't pinged api requests but is authenticated
  if (!userApiLimit) {
    return 0;
  }

  //return their count
  return userApiLimit.count;
};