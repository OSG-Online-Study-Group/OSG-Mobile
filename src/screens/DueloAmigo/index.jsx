import React from "react";
import {
    Container,
    Header,
    MenuButton,
    MenuIcon,
    Title,
    BackButton,
    BackText,
    QuestionCard,
    QuestionIcon,
    QuestionTitle,
    QuestionText,
    ChatArea,
    MessageRow,
    Avatar,
    MessageBubble,
    MessageText,
    LifeBox,
    LifeNumber,
    LifeLabel,
    LifeBar,
    LifeSegment,
    InputArea,
    SendButton,
    AddButton,
    BottomMenu,
    MenuText,
    Input,
    newMessage,
    setNewMessage,
    handleSend,

} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function DueloAmigo({ navigation }) {
    return (
        <Container>

            {/* ======= HEADER ======= */}
            <Header>
                <MenuButton>
                    <MenuIcon source={require("../../assets/images/menu.jpg")} />
                </MenuButton>

                <Title>OSG</Title>

                <BackButton onPress={() => navigation.goBack()}>
                    <BackText>Voltar</BackText>
                </BackButton>
            </Header>

            {/* ======= CARD DE PERGUNTA ======= */}
            <QuestionCard>
                <QuestionIcon source={require("../../assets/images/espada.jpg")} />

                <QuestionTitle>Responda!</QuestionTitle>

                <QuestionText>
                    Liste 3 momentos importantes da era do renascimento
                </QuestionText>
            </QuestionCard>

            {/* ======= CHAT ======= */}
            <ChatArea>

                {/* Mensagem do outro jogador */}
                <MessageRow>
                    <Avatar source={require("../../assets/images/icon_OSG.jpg")} />
                    <MessageBubble>
                        <MessageText>Mensagem do jogador aqui...</MessageText>
                    </MessageBubble>
                </MessageRow>

                {/* Sua mensagem */}
                <MessageRow style={{ justifyContent: "flex-end" }}>
                    <MessageBubble style={{ backgroundColor: "#6A3BA7" }}>
                        <MessageText>Mensagem sua aqui...</MessageText>
                    </MessageBubble>

                    <Avatar source={require("../../assets/images/profile_photo.jpg")} />
                </MessageRow>

            </ChatArea>

            {/* ======= VIDA ======= */}
            <LifeBox>
                <LifeNumber>5</LifeNumber>
                <LifeLabel>pontos de vida restantes</LifeLabel>
            </LifeBox>

            <LifeBar>
                <LifeSegment />
                <LifeSegment />
                <LifeSegment />
                <LifeSegment />
                <LifeSegment />
            </LifeBar>

            {/* ======= INPUT ======= */}
            <InputArea>
                <AddButton>
                    <Title style={{ color: "#fff", fontSize: 22 }}>+</Title>
                </AddButton>

                <Input
                    placeholder="Digite aqui!"
                    placeholderTextColor="#DCDCDC"
                    value={newMessage}
                    onChangeText={setNewMessage}
                />

                <SendButton onPress={handleSend}>
                    <Title style={{ color: "#fff", fontSize: 20 }}>➤</Title>
                </SendButton>
            </InputArea>

            {/* ======= TABS INFERIORES ======= */}
            <BottomMenu>
                <MenuButton>
                    <Ionicons name="home-outline" size={20} color="#fff" />
                    <MenuText>Home</MenuText>
                </MenuButton>

                <MenuButton>
                    <Ionicons name="game-controller-outline" size={20} color="#fff" />
                    <MenuText>Game</MenuText>
                </MenuButton>

                <MenuButton active>
                    <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
                    <MenuText>Grupos</MenuText>
                </MenuButton>

                <MenuButton>
                    <Ionicons name="book-outline" size={20} color="#fff" />
                    <MenuText>Grupos</MenuText>
                </MenuButton>

                <MenuButton>
                    <Ionicons name="person-outline" size={20} color="#fff" />
                    <MenuText>Perfil</MenuText>
                </MenuButton>
            </BottomMenu>

        </Container>
    );
}
