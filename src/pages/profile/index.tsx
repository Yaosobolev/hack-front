import React, { useEffect, useState } from "react";
import axios from "../../core/";
import { useParams } from "react-router-dom";
import {
  IUser,
  IUserAvatar,
  IUniversity,
  IUniversityAvatar,
} from "../../interface/models";

export default function () {
  const { id } = useParams();
  if (!id) {
    throw "ID_REQUIRED_IN_URL";
  }
  const [user, setUser] = useState<
    (IUser & { university: IUniversity }) | null
  >(null);
  const [avatar, setAvatar] = useState<IUserAvatar | null>(null);
  const [universityAvatar, setUniversityAvatar] =
    useState<IUniversityAvatar | null>(null);

  async function fetchUser() {
    const response = await axios.get(`/users/${id}`);
    if (response.data) {
      setUser(response.data.data);
      return;
    }

    throw new Error("USER_NOT_FOUND");
  }

  async function fetchUserAvatar() {
    const response = await axios.get(`/users/${id}/avatar`);
    if (response.data) {
      setAvatar(response.data.data);
    }
  }

  async function fetchUniversityAvatar() {
    const response = await axios.get(`/university/${id}/avatar`);
    if (response.data) {
      setUniversityAvatar(response.data.data);
    }
  }

  async function editUser(data: { content?: string }) {
    const response = await axios.patch(`/users/${id}/`, data);
    if (response.data.data) {
      setUser(response.data.data);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchUserAvatar();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUniversityAvatar();
    }
  }, [user]);

  function RenderUserCard(user: IUser) {
    return (
      <div className="bg-white rounded p-6 flex gap-4 shadow-md shadow-zinc-200 border border-zinc-200">
        <div>
          <img
            className="w-28 h-28 rounded-full"
            src={
              !avatar
                ? "http://localhost:3000/images/default-user-avatar.jpg"
                : `http://localhost:3000/images/${avatar.path}`
            }
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <h2 className="text-lg font-medium">{`${user.firstname} ${user.lastname}`}</h2>
            <p className="text-sm text-zinc-500">
              {user.type == "STUDENT" ? "Студент" : "Представитель ВУЗа"}
            </p>
          </div>
          <div className="flex">
            <textarea
              className="w-full resize-none border-none"
              value={user.content}
              onInput={(e) => setUser({ ...user, content: e.target.value })}
              onBlur={(e) => editUser({ content: e.target.value })}
              placeholder="Напшите немного о себе..."
            ></textarea>
          </div>
        </div>
      </div>
    );
  }

  function RenderDelegateUniversity(user: IUser) {
    return (
      <>
        <div className="bg-white rounded p-6 shadow-md shadow-zinc-200 border border-zinc-200">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img
                className="w-14 h-14 rounded-full"
                src={
                  !universityAvatar
                    ? "http://localhost:3000/images/default-university-avatar.jpg"
                    : `http://localhost:3000/images/${universityAvatar.path}`
                }
              />
              <div>
                <h2 className="text-lg font-medium">{user.university.name}</h2>
                <p className="text-sm text-zinc-400">{user.university.city.name}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-sm text-zinc-500">{user.university.content}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-8">
          {user && RenderUserCard(user)}
          {user && user.type == "DELEGATE" && RenderDelegateUniversity(user)}
        </div>
      </div>
    </>
  );
}
