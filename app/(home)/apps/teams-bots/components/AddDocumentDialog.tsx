"use client";

import { DocumentType } from "@/app/config/enums";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { addDocument } from "@/lib/actions/addDocument";

interface AddDocumentDialogProps {
  botId: number;
}

export default function AddDocumentDialog({ botId }: AddDocumentDialogProps) {
  const addDocumentToBot = addDocument.bind(null, botId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}> Add Document </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Document</DialogTitle>
        </DialogHeader>
        <form action={addDocumentToBot}>
          <div className="grid gap-4 py-4">
            <FormItem label="Document Type">
              <RadioGroup name="type" defaultValue={DocumentType.PDF}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={DocumentType.PDF} id="r1" />
                  <Label htmlFor="r1">PDF (default)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={DocumentType.WEB} id="r2" />
                  <Label htmlFor="r2">Web Data</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={DocumentType.TXT} id="r3" />
                  <Label htmlFor="r3">Plain Text</Label>
                </div>
              </RadioGroup>
            </FormItem>
            <FormItem label="URL">
              <Input name="url" />
            </FormItem>
            <FormItem label="Content">
              <Textarea rows={10} name="content" />
            </FormItem>
            <FormItem label="Selector">
              <Input name="selector" />
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
