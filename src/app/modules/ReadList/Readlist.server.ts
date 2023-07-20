import { IReadList } from "./Readlist.interface";
import { ReadList } from "./Readlist.model";

type IReadLists = {
  reading: boolean;
  readSoon: boolean;
  finish: boolean;
};

const addReadList = async (
  readListData: IReadList,
): Promise<IReadList | null> => {
  const addedReadList = await ReadList.create(readListData);
  return addedReadList;
};

const getSingleReadList = async (
  id: string,
  email: string,
): Promise<IReadList | null> => {
  const getReadList = await ReadList.findOne({
    $and: [{ id: id }, { email: email }],
  });

  return getReadList;
};

const getAllReadList = async (email: string) => {
  const getReadList = await ReadList.find({ email: email }).populate("id");

  return getReadList;
};

const updateReadList = async (id: string, payload: IReadLists) => {
  const updateData = await ReadList.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updateData;
};

export const ReadListService = {
  addReadList,
  getSingleReadList,
  getAllReadList,
  updateReadList,
};
