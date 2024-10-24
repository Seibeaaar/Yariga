import { Landlord } from '@/types/user';
import { FC } from 'react';
import { Avatar } from '@mui/material';
import { LocalPhoneOutlined, ChatOutlined } from '@mui/icons-material';
import { buildFullName, extractInitials } from '@/utils/user';
import { formatPlurarString } from '@/utils/common';

type PropertyLandlordDetailsProps = {
  landlord: Landlord;
};

const PropertyLandlordDetails: FC<PropertyLandlordDetailsProps> = ({
  landlord,
}) => {
  return (
    <article className="rounded-[10px] px-[25px] pt-[15px] pb-[20px] border border-border-light dark:border-border-dark">
      <div className="flex flex-col items-center">
        <Avatar
          sx={{
            width: 90,
            height: 90,
            fontSize: 36,
            marginBottom: '15px',
          }}
          src={landlord.profilePicture}
        >
          {extractInitials(landlord)}
        </Avatar>
        <h5 className="text-lg font-semibold">{buildFullName(landlord)}</h5>
        <p className="text-sm text-secondary-light dark:text-secondary-dark">
          Landlord
        </p>
        <p className="font-semibold">
          {formatPlurarString(
            landlord.properties.length,
            'property',
            'properties',
          )}
        </p>
      </div>
      <div className="mt-[20px] flex items-center gap-[20px]">
        <button
          type="button"
          className="border border-primary px-[15px] py-[10px] rounded-[5px] transition-all hover:bg-transparent dark:hover:bg-transparent flex w-[calc(50%-10px)] justify-center items-center gap-[8px] bg-primary outline-none"
        >
          <ChatOutlined
            color="inherit"
            sx={{
              width: 20,
              height: 20,
            }}
          />
          <p className="font-medium">Chat</p>
        </button>
        <a
          href={`tel:${landlord.phoneNumber}`}
          className="border border-success transition-all hover:bg-transparent dark:hover:bg-transparent justify-center w-[calc(50%-10px)] bg-success outline-none  px-[15px] py-[10px] rounded-[5px] flex items-center gap-[8px]"
        >
          <LocalPhoneOutlined
            color="inherit"
            sx={{
              width: 20,
              height: 20,
            }}
          />
          <p className="font-medium">Call</p>
        </a>
      </div>
    </article>
  );
};

export default PropertyLandlordDetails;
