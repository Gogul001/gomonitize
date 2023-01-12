import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left gap-4">
        <div className="index">
          <div className="index1 flex flex-col content-start">
            <span className="text-xl">Your Dashboard</span>
            <span className="text-sm text-sky-900">Hello,Gomonitize!</span>
          </div>

          <span className="pt-6">
            <a className="text-sky-800" href="">
              See all campigns
            </a>
          </span>
        </div>

        <div class=" leftcard max-w-4xl rounded overflow-hidden shadow-lg pt-6">
          <div className="cardprofile px-8">
            <img
              class="img h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="cardtext">
              <span className="text-lg font-semibold">
                Great Indian diwali sale Campaign
              </span>
              <span className="text-sm">Amazon</span>
            </div>
          </div>
          <div class="justify-start px-6 py-4">
            <p class="justify-start text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="lcardbutton px-6 pt-4 pb-2 gap-16 ">
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              location
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              domain
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              language
            </span>
          </div>
          <hr />
          <div className="cardbottom flex flex-row pl-2 pt-2">
            <div className="bottom1">
              $ <strong>1000</strong>Budget
            </div>
            <div className="bottom1">
              $ <strong>1000</strong>Budget
            </div>
          </div>
        </div>

        <div class="leftcard max-w-4xl rounded overflow-hidden shadow-lg pt-6">
          <div className="cardprofile px-8">
            <img
              class="img h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="cardtext">
              <span className="text-lg font-semibold">
                Great Indian diwali sale Campaign
              </span>
              <span className="text-sm">Amazon</span>
            </div>
          </div>
          <div class="justify-start px-6 py-4">
            <p class="justify-start text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="lcardbutton px-6 pt-4 pb-2 gap-16 ">
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              location
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              domain
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-16 mb-2">
              language
            </span>
          </div>
          <hr />
          <div className="cardbottom flex flex-row pl-2 pt-2">
            <div className="bottom1">
              $ <strong>1000</strong>Budget
            </div>
            <div className="bottom1">
              $ <strong>1000</strong>Budget
            </div>
          </div>
        </div>
      </div>

      <div className="hero_right">
        <button class="bg-black text-white font-bold py-4 px-4 rounded-full w-48 ">
          Create Campaign
        </button>
        <div class="card1 flex justify-center pt-7">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <a
                href="https://www.youtube.com/embed/tgbNymZ7vqY"
                class="text-gray-700 text-base mb-4"
              >
                how to start with Gomonitize
              </a>
            </div>
          </div>
        </div>
        <div class="card2 flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              About us
            </h5>
            <p class="text-gray-700 text-base mb-4">
              here u can go with your description
            </p>
            <a href="#" class="text-gray-700 text-base mb-4">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero