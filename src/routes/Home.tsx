import Button from "../components/Button";
import {
  ArrowNarrowRightIcon,
  AcademicCapIcon,
  CheckIcon,
} from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <span>Home</span>
      <div className="flex flex-col space-y-4 items-start">
        {/* <Button className="bg-green-400" label="Success Button" />
        <Button className="bg-yellow-400" label="Warning Button" />
        <Button className="bg-red-400" label="Danger Button" />
        <Button className="border-2" label="Outline Button" />
        <Button className="bg-teal-400" label="Primary Button" />
        <Button className="bg-indigo-400" label="Secondary Button" /> */}
        <Button disabled label="Warning Button" type="warning" />
        <Button label="Success Button" type="success" />
        <Button label="Danger Button" type="danger" />
        <Button label="Some Button" />
        <Button loading />
        <Button
          leftIcon={<AcademicCapIcon className="w-5 h-5" />}
          label="Some Button"
        />
        <Button
          rightIcon={<CheckIcon className="w-5 h-5" />}
          label="Some Button"
        />
      </div>
    </div>
  );
}
