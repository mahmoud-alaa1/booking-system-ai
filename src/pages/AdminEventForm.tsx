import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { eventsApi } from "@/services/events";

const schema = z.object({
  eventName: z.string().min(1),
  description: z.string().min(1),
  category: z.string(),
  venue: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  price: z.coerce.number().min(0),
  organizer: z.string(),
  capacity: z.coerce.number().min(1),
  imageUrl: z.string().url(),
});

export default function AdminEventForm() {
  const { id } = useParams(); // /admin/event/:id
  const isEdit = !!id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      eventName: "",
      description: "",
      category: "",
      venue: "",
      startDate: "",
      endDate: "",
      price: 0,
      organizer: "",
      capacity: 1,
      imageUrl: "",
    },
  });

  // useEffect(() => {
  //   if (isEdit) {
  //     setLoading(true);
  //     eventsApi.getById(id!)
  //       .then((event: Event) => {
  //         form.reset({
  //           ...event,
  //           startDate: event.startDate.split("T")[0],
  //           endDate: event.endDate.split("T")[0],
  //         });
  //       })
  //       .catch(() => toast.error("Failed to load event"))
  //       .finally(() => setLoading(false));
  //   }
  // }, [id]);

  function onSubmit(values: z.infer<typeof schema>) {
    setLoading(true);
    const action = isEdit
      ? eventsApi.update({
          ...values,
          id: id!,
        })
      : eventsApi.create(values);

    action
      .then(() => {
        toast.success(isEdit ? "Event updated!" : "Event created!");
        navigate("/admin");
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">
        {isEdit ? "Edit Event" : "Add New Event"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* باقي الحقول زي الوصف، السعر، التاريخ، ... */}
          {/* Example: */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Add remaining fields similarly... */}
          <Button type="submit" disabled={loading}>
            {isEdit ? "Update Event" : "Create Event"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
