import pkg from '@slack/bolt';
const { App } = pkg;
import {WebClient} from '@slack/web-api';
import { ChatOpenAI } from 'langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();



