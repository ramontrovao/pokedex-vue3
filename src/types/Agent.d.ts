export type TAgent = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  abilities: TAbility[];
  voiceLine: TVoiceLine;
};

export type TAbility = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

export type TVoiceLine = {
  minDuration: number;
  maxDuration: number;
  mediaList: TMediaList;
};

export type TMediaList = {
  id: number;
  wwise: string;
  wave: string;
};
