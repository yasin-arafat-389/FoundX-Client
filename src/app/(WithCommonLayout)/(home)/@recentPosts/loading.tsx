/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Container from "@/src/components/UI/Container";
import CardSkeleton from "@/src/components/UI/CradSkeleton";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default async function RecentPosts() {
  return (
    <>
      <Container>
        <div className="section-title my-8">
          <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
          <p className="text-center">
            A list of items that have been recently found and reported.
          </p>
        </div>

        <div className="grid- grid-cols-3 gap-6">
          {[...Array(9)].map((items) => (
            <CardSkeleton key={items} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="rounded-md bg-default-900 text-default" size="md">
            <Link href="/found-items">See All</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
