import {useRouter} from "next/router";
import {format} from "date-fns";
import {addUrlParams} from "@/src/shared/utils/utils";
import {oneHourInSeconds} from "@/src/shared/constants/constants";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {IAsteroid} from "@/src/models/asteroidModel";
import {GetStaticProps, GetStaticPropsContext} from "next";
import {AsteroidDetails} from "@/src/features/AsteroidDetails/AsteroidDetails";

export default function Asteroid({asteroid}: {asteroid: IAsteroid}) {
  return <AsteroidDetails asteroid={asteroid} />
}

export const getStaticPaths = async () => {
  const now = new Date();
  const sevenDaysAhead = new Date(now);
  sevenDaysAhead.setDate(now.getDate() + 7);

  const todayFormattedDate = format(now, 'yyyy-MM-dd');
  const sevenDayAheadFormattedDate = format(sevenDaysAhead, 'yyyy-MM-dd');

  const urlWithParams = addUrlParams(process.env.API_URL as string, {
    start_date: todayFormattedDate,
    end_date: sevenDayAheadFormattedDate,
    api_key: process.env.API_KEY as string,
  });

  try {
    const response = await fetch(urlWithParams);

    if (response.status !== 200) {
      return {
        paths: [],
        fallback: "blocking",
      };
    }

    const asteroidsSevenDayPeriod = await response.json();

    const sevenDayPeriodAsteroidsList: IAsteroidListItem[] = [];
    const sevenDayPeriodKeys = Object.keys(asteroidsSevenDayPeriod.near_earth_objects);

    for (let key of sevenDayPeriodKeys) {
      sevenDayPeriodAsteroidsList.push(asteroidsSevenDayPeriod.near_earth_objects[key]);
    }

    const paths = sevenDayPeriodAsteroidsList.map(({ id }) => ({
      params: { id: id.toString() }
    }));

    return {
      paths,
      fallback: "blocking",
    }
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log('context', context);

  const urlWithParams = addUrlParams(`${process.env.API_URL as string}/neo/${context.params?.id}`, {
    api_key: process.env.API_KEY as string,
  });

  try {
    const response = await fetch(urlWithParams);

    if (response.status !== 200) {
      return {
        notFound: true,
      }
    }

    const data = await response.json();

    return {
      props: {
        asteroid: data,
      },
    }
  } catch (error) {
    return {
      notFound: true
    };
  }
}