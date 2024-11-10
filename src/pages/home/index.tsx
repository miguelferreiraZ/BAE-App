import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";

import LogoIcon from "../../assets/logo.png";
import MakeCard from "../../assets/makeup.png";
import HairCard from "../../assets/hair.png";
import SkinCard from "../../assets/sunscreen.png";
import LeafIcon from "../../assets/leaf.png";
import ClockIcon from "../../assets/clock.png";
import PlayIcon from "../../assets/play.png";
import HomeIcon from "../../assets/home.png";
import HeartIcon from "../../assets/heart.png";
import FaceIDIcon from "../../assets/faceid.png";
import ForumIcon from "../../assets/forum.png";
import ChatIcon from "../../assets/chat.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

export default function Home() {
    return (
        <View style={style.container}>
            {/* nome, pontos e logo */}
            <View style={style.header}>
                <View>
                    <Text style={style.greeting}>Hello Mariuska,</Text>
                    <Text style={style.points}>2,648 points</Text>
                </View>
                <Image source={LogoIcon} style={style.profileImage} />
            </View>

            {/* progress bar */}
            <View style={style.dailyRoutine}>
                <View style={style.iconContainer}>
                    <Image source={LeafIcon} style={style.icon} />
                </View>
                <View style={style.textContainer}>
                    <Text style={style.dailyText}>Daily Routine</Text>
                </View>
                <View style={style.progressWrapper}>
                    <Text style={style.progressPercentage}>70%</Text>
                    <View style={style.progressContainer}>
                        <View style={style.progressBar}></View>
                    </View>
                </View>
            </View>

            <Text style={style.sectionTitle}>For you</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={style.recommendations}
                contentContainerStyle={{
                    gap: 15,
                    flexGrow: 0,
                    paddingBottom: 0,

                }}
            >
            
                <View style={style.card}>
                    <Image source={MakeCard} style={style.cardImage} />
                    <View style={style.timeContainer}>
                        <View style={style.timeContainerWrapper}>
                            <Image source={ClockIcon} style={style.icon} />
                            <Text style={style.timeText}>3m</Text>
                        </View>
                    </View>

                    <View style={style.playButtonContainer}>
                        <Image source={PlayIcon} style={style.playIcon} />
                    </View>

                    <View style={style.cardTextContainer}>
                        <Text style={style.cardText}>3 Essential Tips for Your Makeup Routine</Text>
                    </View>
                </View>
                
                <View style={style.card}>
                    <Image source={HairCard} style={style.cardImage} />
                    <View style={style.timeContainer}>
                        <View style={style.timeContainerWrapper}>
                            <Image source={ClockIcon} style={style.icon} />
                            <Text style={style.timeText}>5m</Text>
                        </View>
                    </View>

                    <View style={style.playButtonContainer}>
                        <Image source={PlayIcon} style={style.playIcon} />
                    </View>

                    <View style={style.cardTextContainer}>
                        <Text style={style.cardText}>4 Tips for Your Hair Finishing Routine</Text>
                    </View>
                </View>
                <View style={style.card}>
                    <Image source={SkinCard} style={style.cardImage} />
                    <View style={style.timeContainer}>
                        <View style={style.timeContainerWrapper}>
                            <Image source={ClockIcon} style={style.icon} />
                            <Text style={style.timeText}>4m</Text>
                        </View>
                    </View>

                    <View style={style.playButtonContainer}>
                        <Image source={PlayIcon} style={style.playIcon} />
                    </View>

                    <View style={style.cardTextContainer}>
                        <Text style={style.cardText}>How and When to Use Sunscreen</Text>
                    </View>
                </View>
                
            </ScrollView>

            <Text style={style.sectionTitle}>Products</Text>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={style.recommendations}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    gap: 15
                }}
            >
                <View style={style.colProducts}>
                    <View style={style.cardProducts}>
                        <Image source={img1} style={style.cardImage} />
                    </View>
                </View>
                
                <View style={style.colProducts}>
                    <View style={style.cardProducts}>
                        <Image source={img2} style={style.cardImage} />
                    </View>
                </View>

                <View style={style.colProducts}>
                    <View style={style.cardProducts}>
                        <Image source={img3} style={style.cardImage} />
                    </View>
                </View>

            </ScrollView>
                

            {/* Navbar */}

            <View style={style.navbar}>
                {/* Home Icon */}
                <Image source={HomeIcon} style={style.navbarIcon} />
                
                {/* Heart Icon */}
                <Image source={HeartIcon} style={style.navbarIcon} />
                
                {/* Center AR Icon */}
                <View style={style.centerIcon}>
                    <Image source={FaceIDIcon} style={style.centerIconImage} />
                </View>
                
                {/* Forum Icon */}
                <Image source={ForumIcon} style={style.navbarIcon} />
                
                {/* Profile Icon */}
                <Image source={ChatIcon} style={style.navbarIcon} />
            </View>
        </View>
    );
}
