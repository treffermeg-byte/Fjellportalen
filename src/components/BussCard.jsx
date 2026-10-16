import { useState } from "react";
import useBusDepartures from "../Hooks/useBusDepartures";

export default function BussCard() {
  const [destination, setDestination] =
    useState("beitostolen");

  const [travelDate, setTravelDate] =
    useState("");

  const [travelTime, setTravelTime] =
    useState("08:00");

  const {
    departures,
    loading,
    searchTrips,
  } = useBusDepartures();

  async function handleSearch() {
    await searchTrips(
      destination,
      travelDate,
      travelTime
    );
  }

  const bookingUrl =
    destination === "beitostolen"
      ? "https://www.nor-way.no"
      : "https://www.vy.no";

  const bookingText =
    destination === "beitostolen"
      ? "🎫 Bestill hos NOR-WAY"
      : "🎫 Bestill hos Vy";

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚌 Bussplanlegger
      </h2>

      <div className="space-y-4">

        <div>
          <label className="font-semibold">
            Fra
          </label>

          <div className="mt-1 border rounded-xl p-3 bg-slate-50">
            Oslo Bussterminal
          </div>
        </div>

        <div>
          <label className="font-semibold">
            Til
          </label>

          <select
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
            className="w-full border rounded-xl p-3 mt-1"
          >
            <option value="beitostolen">
              Beitostølen
            </option>

            <option value="stryn">
              Stryn
            </option>
          </select>
        </div>

        <div>
          <label className="font-semibold">
            📅 Avreise dato
          </label>

          <input
            type="date"
            value={travelDate}
            onChange={(e) =>
              setTravelDate(e.target.value)
            }
            className="w-full border rounded-xl p-3 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">
            🕒 Avreise klokkeslett
          </label>

          <input
            type="time"
            value={travelTime}
            onChange={(e) =>
              setTravelTime(e.target.value)
            }
            className="w-full border rounded-xl p-3 mt-1"
          />
        </div>

    
