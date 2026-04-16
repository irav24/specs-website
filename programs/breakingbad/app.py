import streamlit as st
import pandas as pd

# Load data
df = pd.read_csv("breaking_bad_season_4_5.csv")
df["Mood"] = df["Mood"].str.lower()
df["Theme"] = df["Theme"].str.lower()

st.title("RAVI'S KHATARNAK Recommender")
mood = st.selectbox("Select your mood:", ["sad", "happy", "emotional", "intense", "dark", "calm"])
theme = st.selectbox("Select your theme:", ["plot twist", "revenge", "family", "violence", "collapse", "heist", "power", "strategy", "isolation"])

fil = df[df["Mood"].str.contains(mood) & df["Theme"].str.contains(theme)]


if st.button("Recommend Episode"):
    if not fil.empty:
        st.subheader("Found " +str(len(fil))+ "episode:")
        for _, row in fil.iterrows():
            st.text(" Title   : " + row["Title"])
            st.text(" Episode : Season " + str(row["Season"]) + " Episode " + str(row["Episode"]))
            st.text(" Mood    : " + row["Mood"])
            st.text(" Theme   : " + row["Theme"])
            st.text("______")


    else:
        st.warning("Dhang se choose kar.")
