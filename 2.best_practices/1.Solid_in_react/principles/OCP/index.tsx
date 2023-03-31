import { Button } from "./button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function OCP() {

  // -----------------------------------------------------------------------------------
  // Open Closed principle - open for extension but closed for modification
  // -----------------------------------------------------------------------------------
  // you are passing icon rather than role
  // so no need to code change in child component

  return (
    <div className="flex space-x-10">

      <Button
        text="Go Home"
        // role="forward"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        // role="back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
