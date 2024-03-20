// emailjs
import emailjs from "@emailjs/browser";

const sendEmail = async () => {
  const form = document.querySelector("#emailForm") as HTMLFormElement;

  try {
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      "#emailForm",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    );

    if (response.status === 200) {
      form.reset();
      return response;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export { sendEmail };
