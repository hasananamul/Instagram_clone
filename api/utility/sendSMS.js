import Vonage from '@vonage/server-sdk'

const vonage = new Vonage({
  apiKey: "f95ace92",
  apiSecret: "9AtT9rHDkJYppmoF"
})


export const sendSMS = () => {
      const from = "Vonage APIs"
      const to = "6587323710"
      const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
            console.log(err);
      } else {
            if(responseData.messages[0]['status'] === "0") {
                  console.log("Message sent successfully.");
            } else {
                  console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
      }
})
}