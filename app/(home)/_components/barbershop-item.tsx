import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[170px] max-w-[170px] rounded-2xl">
            <CardContent className="px-1 py-0 pt-1">
                <div className="w-full h-[160px] relative ">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant={"secondary"} className="flex gap-1 items-center opacity-90">
                            <StarIcon size={14} className="fill-primary text-primary"/>
                            <span>5,0</span>
                        </Badge>
                    </div>

                    <Image
                        src={barbershop.imageUrl}
                        alt={`BarberShop ${barbershop.name} Image`}
                        height={0}
                        width={0}
                        sizes={"100vw"}
                        className="rounded-2xl"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
                        {barbershop.name}
                    </h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
                        {barbershop.address}
                    </p>
                    <Button className="w-full mt-4 " variant={"secondary"}>
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarbershopItem;
