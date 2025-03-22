"use client"
import Tile from "../demo/Tile";
import Auth from "../demo/auth/Auth";
import Admin from "../demo/Admin";
import Todo from "../demo/todo/Todo";
import { MyTodo } from "@/components/my-todo";

export default function Home() {
  return (
    <div className="tiles">
      <Tile
        title="remult-project"
        subtitle=""
        icon="remult"
        className="intro"
        status="Success"
        width="half"
      >
      </Tile>
      <Auth />
      <Admin />
      {/* <Todo /> */}

      <MyTodo />
    </div>
  );
}
