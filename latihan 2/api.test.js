const request = require("supertest");
const { expect } = require("chai");

const baseUrl = "https://restful-booker.herokuapp.com";

let token;
let bookingId;

describe("E2E API Testing - Restful Booker", () => {

  // Step 1: Login
  it("Auth - dapat token", async () => {
    const res = await request(baseUrl)
      .post("/auth")
      .set("Content-Type", "application/json")
      .send({
        username: "admin",
        password: "password123"
      });

    expect(res.status).to.equal(200);
    expect(res.body.token).to.exist;
    token = res.body.token;
    console.log("Token:", token);
  });

  // Step 2: Buat booking
  it("Create Booking - buat data booking baru", async () => {
    const res = await request(baseUrl)
      .post("/booking")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        firstname: "Ahmad",
        lastname: "Maulana",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-10-01",
          checkout: "2025-10-03"
        },
        additionalneeds: "Breakfast"
      });

    expect(res.status).to.equal(200);
    expect(res.body.bookingid).to.exist;
    bookingId = res.body.bookingid;
    console.log("Booking ID:", bookingId);
  });

  // Step 3: Ambil booking
  it("Get Booking - ambil data booking", async () => {
    const res = await request(baseUrl)
      .get(`/booking/${bookingId}`)
      .set("Accept", "application/json");

    expect(res.status).to.equal(200);
    expect(res.body.firstname).to.equal("Ahmad");
    expect(res.body.lastname).to.equal("Maulana");
    console.log("✅ Data booking sesuai:", res.body);
  });

  // Step 4: Hapus booking
  it("Delete Booking - hapus data booking", async () => {
    const res = await request(baseUrl)
      .delete(`/booking/${bookingId}`)
      .set("Content-Type", "application/json")
      .set("Cookie", `token=${token}`);

    expect(res.status).to.equal(201);
  });

  // Step 5: Cek lagi setelah delete
  it("Verify Delete - booking harus hilang", async () => {
    const res = await request(baseUrl)
      .get(`/booking/${bookingId}`);

    expect(res.status).to.equal(404);
  });

});
