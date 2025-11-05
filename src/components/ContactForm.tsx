"use client";

import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldLabel } from "./ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export interface ContactFormProps {
  className?: string;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setError(null); // clear previous errors
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        // If your API returns { error: "message" }
        setError(data.error || "Noe gikk galt, prøv igjen senere.");
        return;
      }

      setIsSent(true);
      reset();
    } catch (err) {
      console.error(err);
      setError("Kunne ikke sende meldingen. Sjekk internettforbindelsen din.");
    }
  };

  if (isSent) {
    return (
      <Card className={className}>
        <CardContent className="text-center py-12">
          <h2 className="font-semibold text-2xl mb-4">Takk for din melding!</h2>
          <p>Vi vil komme tilbake til deg så snart som mulig.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      {!isSent ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Kontakt oss</CardTitle>
            <CardDescription>
              Fyll ut skjemaet under for å komme i kontakt.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Navn er påkrevd" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">Navn</FieldLabel>
                  <Input
                    {...field}
                    id="contact-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ditt navn"
                    autoComplete="off"
                    className={cn(
                      "h-12 text-lg",
                      fieldState.invalid && "border-red-400"
                    )}
                  />
                </Field>
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "E-post er påkrevd",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ugyldig e-postadresse",
                },
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">E-post</FieldLabel>
                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="din@epost.no"
                    autoComplete="off"
                    className={cn(
                      "h-12 text-lg",
                      fieldState.invalid && "border-red-400"
                    )}
                  />
                </Field>
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Melding er påkrevd" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-message">Melding</FieldLabel>
                  <Textarea
                    {...field}
                    id="contact-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Skriv meldingen din her..."
                    rows={5}
                    className="h-64"
                  />
                </Field>
              )}
            />
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <p className="text-red-500">{error}</p>
            <Button type="submit">
              {isSubmitting && <Spinner />}
              Send melding
            </Button>
          </CardFooter>
        </form>
      ) : (
        <CardContent className="text-center py-12">
          <h2 className="font-semibold text-2xl mb-4">Takk for din melding!</h2>
          <p>Vi vil komme tilbake til deg så snart som mulig.</p>
        </CardContent>
      )}
    </Card>
  );
};

export default ContactForm;
