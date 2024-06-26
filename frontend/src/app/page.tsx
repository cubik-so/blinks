"use client";
import { InputContainer } from "@squaress/ui/input-container";
import {
  InputField,
  InputLabel,
  InputFieldContainer,
  Button,
  Text,
  Select,
  SelectOptionsType,
  Modal,
} from "@/lib/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { ProjectFullInfo, SuccessResponse } from "./project";
import { useMemo, useState } from "react";
import { calculateEventStatus } from "@/helper/eventStatus";
import { getValidToken } from "@/helper/tokens/getValidTokenList";
import QRCode from "qrcode";

const getOngoingEvents = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/project/full/${slug}`
  );
  const ongoingEvents = (await res.json()) as SuccessResponse<ProjectFullInfo>;
  if (!ongoingEvents) throw new Error("No data found");
  return ongoingEvents.data;
};

export default function Home() {
  let eventOptions = [
    {
      label: "Tip",
      value: "tip",
    },
  ];

  const tokenList = getValidToken();
  const [projectPDA, setProjectPDA] = useState("");
  const [src, setSrc] = useState("");
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);
  const TokenOptions: SelectOptionsType[] = tokenList.map((token) => ({
    label: token.symbol,
    value: token.address,
    icon: token.logoURI,
  }));

  const donationForm = useForm({
    defaultValues: {
      slug: "",
      donationAmount: 1,
      token: TokenOptions[0].value,
      eventName: eventOptions[0],
    },
    resolver: zodResolver(
      z.object({
        slug: z
          .string()
          .min(1, {
            message: "Project slug can't be empty",
          })
          .max(36, {
            message: "Must be at most 36 characters",
          }),
        donationAmount: z
          .number()
          .gte(0.01, { message: "Amount should be greater than 0.01" }),
      })
    ),
  });

  const generateQR = (url: string) => {
    QRCode.toDataURL(url).then(setSrc);
  };

  const onSubmit = async (val: {
    slug: string;
    donationAmount: number;
    token: string;
    eventName: { label: string; value: string };
  }) => {
    if (donationForm.getValues("eventName.value") === "tip") {
      generateQR(
        `https://blinks.cubik.so?amount=${donationForm.getValues(
          "donationAmount"
        )}&projectPDA=${projectPDA}&token=${donationForm.getValues("token")}`
      );
    } else {
      generateQR(
        `https://blinks.cubik.so?amount=${donationForm.getValues(
          "donationAmount"
        )}&projectPDA=${projectPDA}&token=${donationForm.getValues(
          "token"
        )}&eventPDA=${donationForm.getValues("eventName.value")}`
      );
    }
    setIsQrCodeOpen(true);
  };

  useMemo(async () => {
    if (donationForm.watch("slug").length >= 3) {
      const projectInfo = await getOngoingEvents(donationForm.watch("slug"));
      setProjectPDA(projectInfo.createKey);
      const selectedProjectJoin = projectInfo.projectJoinEvent
        .filter(
          (e) =>
            !e.event.isArchive &&
            calculateEventStatus(e.event.eventStatus) === "VOTING"
        )
        .map((e) =>
          eventOptions.push({
            label: e.event.name,
            value: e.event.eventKey,
          })
        );
    }
  }, [donationForm.watch("slug").length]);

  return (
    <div className="flex items-center  justify-center h-screen w-screen ">
      <div className="flex flex-col max-w-xl w-full">
        <form
          onSubmit={donationForm.handleSubmit(onSubmit)}
          className="flex h-full w-[90%] flex-col gap-8 2xl:w-[85%]"
        >
          <div className="flex w-full flex-col gap-2">
            <InputLabel id="name" isRequired>
              Project Slug
            </InputLabel>

            <InputFieldContainer
              size="md"
              isError={donationForm.formState.errors.slug ? true : false}
            >
              <InputField
                name="slug"
                placeholder="slug of project"
                onChange={(e) => {
                  donationForm.setValue("slug", e.currentTarget.value);
                }}
                defaultValue={donationForm.formState.defaultValues?.slug}
              />
            </InputFieldContainer>
            {donationForm.formState.errors.slug?.message && (
              <Text className="l2 error" color="negative">
                {donationForm.formState.errors.slug.message}
              </Text>
            )}
          </div>

          <div className="flex items-end gap-2">
            <div className="flex w-full flex-col gap-2">
              <InputLabel id="amount" isRequired>
                Donation Amount
              </InputLabel>

              <InputFieldContainer
                size="md"
                isError={
                  donationForm.formState.errors.donationAmount ? true : false
                }
              >
                <InputField
                  name="donationAmount"
                  type="number"
                  placeholder="0.01"
                  onChange={(e) => {
                    donationForm.setValue(
                      "donationAmount",
                      Number(e.currentTarget.value)
                    );
                  }}
                  defaultValue={
                    donationForm.formState.defaultValues?.donationAmount
                  }
                />
              </InputFieldContainer>
              {donationForm.formState.errors.donationAmount?.message && (
                <Text className="l2 error" color="negative">
                  {donationForm.formState.errors.donationAmount.message}
                </Text>
              )}
            </div>
            <div className="w-full">
              <Select
                placeholder="Token"
                size="md"
                onChange={(e) => {
                  if (!e) return;
                  const val = e as SelectOptionsType;
                  donationForm.setValue("token", val.value);
                }}
                value={
                  TokenOptions.filter(
                    (token) => token.value === donationForm.watch("token")
                  )[0]
                }
                isMulti={false}
                isSearchable={false}
                defaultValue={TokenOptions[0]}
                options={TokenOptions}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <InputContainer>
              <InputLabel id="eventName" isRequired>
                Select Event
              </InputLabel>
              <Controller
                name="eventName"
                control={donationForm.control}
                render={(field) => (
                  <Select
                    {...field}
                    name="eventName"
                    placeholder="Choose Grant Round"
                    isMulti={false}
                    size="md"
                    isClearable={false}
                    isSearchable={false}
                    onChange={(e) => {
                      if (!e) return;
                      donationForm.setValue("eventName", e as any);
                    }}
                    //  value={watch('grant')}
                    options={eventOptions}
                    defaultValue={eventOptions[0]}
                    isError={
                      donationForm.formState.errors.eventName ? true : false
                    }
                  />
                )}
              />
              {donationForm.formState.errors.eventName && (
                <Text className="l2 error" color="negative">
                  {donationForm.formState.errors.eventName.message}
                </Text>
              )}
            </InputContainer>
          </div>

          <Button type="submit" variant="success" isLoading={false}>
            Donate
          </Button>
        </form>
      </div>
      <Modal
        dialogSize="md"
        onClose={() => setIsQrCodeOpen(false)}
        open={isQrCodeOpen}
        className=" flex justify-center items-center"
      >
        <img src={src} alt="qrcode" />
      </Modal>
    </div>
  );
}
