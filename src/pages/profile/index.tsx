import React, { useEffect, useState } from "react";
import axios from "../../core/";
import { useParams } from "react-router-dom";
import { IUser, IUserAvatar } from "../../interface/models/user";

export default function () {
  const { id } = useParams();
  if (!id) {
    throw "ID_REQUIRED_IN_URL";
  }
  const [user, setUser] = useState<IUser | null>(null);
  const [avatar, setAvatar] = useState<IUserAvatar | null>(null);

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

  function RenderUserCard(user: IUser) {
    return (
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col">
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
        </div>
      </div>
    );
  }

  return <>{user ? RenderUserCard(user) : ""}</>;
}
