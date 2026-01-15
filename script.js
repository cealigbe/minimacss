/* 
 * Minima CSS Testpage Script 
 * 
 * Minima.css -
 * Copyright 2025-2026 - MIT License
 *
 */

// Config

const modalClasses = {opened: "dialog-opened", opening: "dialog-opening", closing: "dialog-closing"};
const animationDuration = 200; // ms

// Toggle Modal
let visibleModal = null;

function toggleModal(event) {
	event.preventDefault();
	const modal = document.getElementById(event.currentTarget.dataset.target);
	if (!modal) return;

	if (modal && modal.open) {
		closeModal(modal)
	} else {
		openModal(modal)
	}
}

function openModal(modal) {
	const { documentElement: html } = document;

	html.classList.add(modalClasses.opened, modalClasses.opening);
	setTimeout(() => {
		visibleModal = modal;
		html.classList.remove(modalClasses.opening);
	}, animationDuration);
	modal.showModal();
}

function closeModal(modal) {
	visibleModal = null;
	const { documentElement: html } = document;

	html.classList.add(modalClasses.closing);
	setTimeout(() => {
		html.classList.remove(modalClasses.closing, modalClasses.opened);
		modal.close();
	}, animationDuration);
}

// Close modal with click outside
document.addEventListener("click", (event) => {
	if (visibleModal == null) return;
	const modalContent = visibleModal.querySelector("article");
	const isClickInside = modalContent.contains(event.target);
	!isClickInside && closeModal(visibleModal);
});

// Close with escape key
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && visibleModal) {
		closeModal(visibleModal);
	}
}) 

