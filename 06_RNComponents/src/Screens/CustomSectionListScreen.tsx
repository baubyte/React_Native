import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ItemSeparator} from '../Components/ItemSeparator';
import {styles} from '../Theme/appTheme';
interface Home {
  home: string;
  data: string[];
}

const homes: Home[] = [
  {
    home: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    home: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    home: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];
export const CustomSectionListScreen = () => {
  return (
    <View style={[styles.globalMargin, internalStyles.container]}>
      <SectionList
        sections={homes}
        keyExtractor={(item, index) => `${item}${index}`}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={internalStyles.footerContainer}>
            <HeaderTitle title={`Total de Casas🧮: ${homes.length}`} />
          </View>
        )}
        renderItem={({item}) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section: {home}}) => (
          <View style={internalStyles.containerSection}>
            <HeaderTitle title={home} />
          </View>
        )}
        renderSectionFooter={({section: {data}}) => (
          <HeaderTitle title={`Total🧮:  ${data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        /* ItemSeparatorComponent={() => <ItemSeparator />} */
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSection: {
    backgroundColor: 'white',
  },
  footerContainer: {
    marginBottom: 60,
  },
});
