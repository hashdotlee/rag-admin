"use client";

import FormItem from "@/components/custom/FormItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { upsertBot } from "@/lib/actions/upsertBot";

export default function CreateTeamsBotsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Add Bot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Bot</DialogTitle>
        </DialogHeader>
        <form action={upsertBot}>
          <div className="grid gap-4 py-4">
            <FormItem label="Bot Name">
              <Input
                id="name"
				name="name"
                placeholder="Enter bot name"
                className="col-span-3"
              />
            </FormItem>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
