import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt, BiMicrophone } from 'react-icons/bi';
import { IoIosSettings } from 'react-icons/io';

export function EthereumIcon() {
  return (
    <img
      src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
      alt="ethlogo"
      style={{ width: '45%' }}
    />
  );
}

export function ArrowCircleRightIcon() {
  return <BiRightArrowAlt style={{ fontSize: '2rem', color: '#fff' }} />;
}

export function ChevronLeftIcon() {
  return <BiLeftArrowAlt style={{ fontSize: '2rem', color: '#fff' }} />;
}

export function MicrophoneIcon() {
  return <IoIosSettings style={{ fontSize: '2rem', color: '#fff' }} />;
}

export function CogIcon() {
  return <BiMicrophone style={{ fontSize: '2rem', color: '#fff' }} />;
}
